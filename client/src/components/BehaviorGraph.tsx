/**
 * BehaviorGraph — renders single-subject research design graphs as inline SVG.
 * Supports: reversal (A-B-A-B), multiple baseline, alternating treatments (ATD/multi-element),
 * changing criterion, and multiple treatment designs.
 *
 * Design: dark slate theme matching the exam UI.
 */

import React from "react";
import type { BehaviorGraphData, DataSeries } from "../data/graphTypes";

interface Props {
  graph: BehaviorGraphData;
  width?: number;
  height?: number;
  className?: string;
}

const MARKER_R = 5;
const COLORS = ["#60a5fa", "#f97316", "#34d399", "#f472b6", "#a78bfa"];

function getMarkerPath(shape: string, cx: number, cy: number, r: number): string {
  switch (shape) {
    case "square":
      return `M${cx - r},${cy - r} h${r * 2} v${r * 2} h${-r * 2} z`;
    case "triangle":
      return `M${cx},${cy - r} L${cx + r},${cy + r} L${cx - r},${cy + r} z`;
    case "diamond":
      return `M${cx},${cy - r} L${cx + r},${cy} L${cx},${cy + r} L${cx - r},${cy} z`;
    default: // circle
      return `M${cx - r},${cy} a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 ${-r * 2},0`;
  }
}

export const BehaviorGraph: React.FC<Props> = ({
  graph,
  width = 560,
  height = 260,
  className = "",
}) => {
  const PAD = { top: 36, right: 20, bottom: 44, left: 52 };
  const plotW = width - PAD.left - PAD.right;
  const plotH = height - PAD.top - PAD.bottom;

  const allValues = graph.series.flatMap((s: DataSeries) =>
    s.data.filter((v: number | null): v is number => v !== null)
  );
  const rawMin = graph.yMin ?? Math.max(0, Math.min(...allValues) - 1);
  const rawMax = graph.yMax ?? Math.max(...allValues) + 2;
  const yMin = rawMin;
  const yMax = rawMax;
  const yRange = yMax - yMin || 1;

  const totalSessions =
    graph.sessions ?? Math.max(...graph.series.map((s: DataSeries) => s.data.length));
  const xStep = plotW / Math.max(totalSessions - 1, 1);

  const toX = (i: number) => PAD.left + i * xStep;
  const toY = (v: number) => PAD.top + plotH - ((v - yMin) / yRange) * plotH;

  // Y ticks
  const tickInterval = graph.yTickInterval ?? Math.max(1, Math.ceil(yRange / 5));
  const yTicks: number[] = [];
  for (
    let v = Math.ceil(yMin / tickInterval) * tickInterval;
    v <= yMax;
    v += tickInterval
  ) {
    yTicks.push(v);
  }

  // X ticks
  const xTicks = Array.from({ length: totalSessions }, (_: unknown, i: number) => i + 1);

  return (
    <div className={`rounded-lg overflow-hidden bg-slate-900 border border-slate-700 ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ display: "block", maxWidth: width }}
        aria-label={graph.title ?? "Behavior graph"}
      >
        {/* Background */}
        <rect width={width} height={height} fill="#0f172a" rx="8" />

        {/* Grid lines */}
        {yTicks.map((v: number) => (
          <line
            key={`grid-y-${v}`}
            x1={PAD.left}
            y1={toY(v)}
            x2={PAD.left + plotW}
            y2={toY(v)}
            stroke="#1e293b"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        <line
          x1={PAD.left} y1={PAD.top}
          x2={PAD.left} y2={PAD.top + plotH}
          stroke="#475569" strokeWidth="1.5"
        />
        <line
          x1={PAD.left} y1={PAD.top + plotH}
          x2={PAD.left + plotW} y2={PAD.top + plotH}
          stroke="#475569" strokeWidth="1.5"
        />

        {/* Y axis ticks + labels */}
        {yTicks.map((v: number) => (
          <g key={`ytick-${v}`}>
            <line x1={PAD.left - 4} y1={toY(v)} x2={PAD.left} y2={toY(v)} stroke="#475569" strokeWidth="1" />
            <text
              x={PAD.left - 7}
              y={toY(v)}
              textAnchor="end"
              dominantBaseline="middle"
              fill="#94a3b8"
              fontSize="10"
            >
              {v}
            </text>
          </g>
        ))}

        {/* X axis ticks + labels */}
        {xTicks.map((n: number) => (
          <g key={`xtick-${n}`}>
            <line
              x1={toX(n - 1)} y1={PAD.top + plotH}
              x2={toX(n - 1)} y2={PAD.top + plotH + 4}
              stroke="#475569" strokeWidth="1"
            />
            <text
              x={toX(n - 1)}
              y={PAD.top + plotH + 14}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="9"
            >
              {n}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        {graph.xLabel && (
          <text
            x={PAD.left + plotW / 2}
            y={height - 4}
            textAnchor="middle"
            fill="#64748b"
            fontSize="10"
          >
            {graph.xLabel}
          </text>
        )}
        {graph.yLabel && (
          <text
            x={12}
            y={PAD.top + plotH / 2}
            textAnchor="middle"
            fill="#64748b"
            fontSize="10"
            transform={`rotate(-90, 12, ${PAD.top + plotH / 2})`}
          >
            {graph.yLabel}
          </text>
        )}

        {/* Phase change lines + labels */}
        {(graph.phaseChanges ?? []).map((pc, idx: number) => {
          const x = toX(pc.afterSession) + xStep / 2;
          return (
            <g key={`phase-${idx}`}>
              <line
                x1={x} y1={PAD.top - 8}
                x2={x} y2={PAD.top + plotH}
                stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3"
              />
              <text x={x + 4} y={PAD.top + 6} fill="#94a3b8" fontSize="9" fontWeight="600">
                {pc.label}
              </text>
            </g>
          );
        })}

        {/* Data series */}
        {graph.series.map((series: DataSeries, si: number) => {
          const color = series.color || COLORS[si % COLORS.length];
          const shape = series.markerShape ?? (["circle", "square", "triangle", "diamond"][si % 4]);
          const dash = series.dashed ? "5 3" : undefined;

          // Build path segments (break on null)
          const segments: string[] = [];
          let currentSeg = "";
          series.data.forEach((v: number | null, i: number) => {
            if (v === null) {
              if (currentSeg) segments.push(currentSeg);
              currentSeg = "";
            } else {
              const x = toX(i);
              const y = toY(v);
              currentSeg += currentSeg ? ` L${x},${y}` : `M${x},${y}`;
            }
          });
          if (currentSeg) segments.push(currentSeg);

          return (
            <g key={`series-${si}`}>
              {/* Lines */}
              {segments.map((d: string, di: number) => (
                <path key={di} d={d} fill="none" stroke={color} strokeWidth="2" strokeDasharray={dash} />
              ))}
              {/* Markers */}
              {series.data.map((v: number | null, i: number) => {
                if (v === null) return null;
                const x = toX(i);
                const y = toY(v);
                return (
                  <path
                    key={`m-${i}`}
                    d={getMarkerPath(shape, x, y, MARKER_R)}
                    fill={color}
                    stroke="#0f172a"
                    strokeWidth="1.5"
                  />
                );
              })}
            </g>
          );
        })}

        {/* Title */}
        {graph.title && (
          <text
            x={PAD.left + plotW / 2}
            y={16}
            textAnchor="middle"
            fill="#e2e8f0"
            fontSize="11"
            fontWeight="600"
          >
            {graph.title}
          </text>
        )}

        {/* Legend */}
        {graph.series.length > 1 && (() => {
          const legendY = height - 10;
          const itemW = 110;
          const totalW = graph.series.length * itemW;
          const startX = PAD.left + plotW / 2 - totalW / 2;
          return (
            <g>
              {graph.series.map((s: DataSeries, si: number) => {
                const color = s.color || COLORS[si % COLORS.length];
                const lx = startX + si * itemW;
                return (
                  <g key={`legend-${si}`}>
                    <line x1={lx} y1={legendY} x2={lx + 16} y2={legendY} stroke={color} strokeWidth="2" />
                    <circle cx={lx + 8} cy={legendY} r={3} fill={color} />
                    <text x={lx + 20} y={legendY} dominantBaseline="middle" fill="#94a3b8" fontSize="9">
                      {s.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })()}
      </svg>
    </div>
  );
};

export default BehaviorGraph;
