
export interface Question {
  scrambled: string[];
  correctAnswers: string[]; // Supports multiple valid orderings
  hint: string;
}

export interface InfographicStep {
  label: string;
  icon?: string;
  color: string;
}

export interface LevelGuide {
  rule: string;
  example: string;
  tip?: string;
  visualType?: 'formula' | 'comparison' | 'flow';
  steps?: InfographicStep[];
}

export interface Level {
  id: number;
  title: string;
  guide: LevelGuide;
  questions: Question[];
}

export enum MascotState {
  IDLE = 'IDLE',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  TICKLE = 'TICKLE',
  WIN = 'WIN',
  EATING = 'EATING'
}

export interface LevelProgress {
  stars: number;
  isPerfect: boolean;
}

export interface GameProgress {
  unlockedLevels: number[];
  completedLevels: Record<number, LevelProgress>;
  bananas: number;
}
