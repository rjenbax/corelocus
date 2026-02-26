/**
 * Graph data types for single-subject research design visualizations.
 * Used by BehaviorGraph component and embedded in Question.graphData.
 */

export interface DataSeries {
  label: string;
  color?: string;
  data: (number | null)[];
  dashed?: boolean;
  markerShape?: "circle" | "square" | "triangle" | "diamond";
}

export interface PhaseChange {
  afterSession: number; // draw phase line after this session index (0-based)
  label: string;
}

export interface BehaviorGraphData {
  title?: string;
  yLabel?: string;
  xLabel?: string;
  yMin?: number;
  yMax?: number;
  yTickInterval?: number;
  sessions?: number;
  series: DataSeries[];
  phaseChanges?: PhaseChange[];
  interleaved?: boolean; // true for ATD/multi-element designs
}
