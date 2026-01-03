
import { Level } from '../types';
import { BIOME1_LEVELS } from './biome1';
import { BIOME2_LEVELS } from './biome2';
import { BIOME3_LEVELS } from './biome3';

export const LEVELS: Level[] = [
  ...BIOME1_LEVELS,
  ...BIOME2_LEVELS,
  ...BIOME3_LEVELS
];
