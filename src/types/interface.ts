import { CellPlayer } from './enum';
export interface GameStatistics {
  [CellPlayer.X]: number;
  [CellPlayer.O]: number;
  tie: number;
}
