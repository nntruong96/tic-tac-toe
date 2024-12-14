import { checkWinner } from './utils';
import { CellPlayer } from '@/types/enum';
import { Board } from '@/types/type';

describe('checkWinner', () => {
  it('should return the winner and winning combination when there is a winner', () => {
    const board: Board = [
      CellPlayer.X,
      CellPlayer.X,
      CellPlayer.X,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    const result = checkWinner(board);
    expect(result).toEqual({
      winner: CellPlayer.X,
      combo: [0, 1, 2],
    });
  });

  it('should return null when there is no winner', () => {
    const board: Board = [
      CellPlayer.X,
      CellPlayer.O,
      CellPlayer.X,
      CellPlayer.O,
      CellPlayer.X,
      CellPlayer.O,
      CellPlayer.O,
      CellPlayer.X,
      CellPlayer.O,
    ];
    const result = checkWinner(board);
    expect(result).toBeNull();
  });

  it('should return the correct winner and winning combination for a different winning combo', () => {
    const board: Board = [
      CellPlayer.O,
      CellPlayer.X,
      CellPlayer.O,
      CellPlayer.X,
      CellPlayer.O,
      CellPlayer.X,
      CellPlayer.O,
      null,
      CellPlayer.X,
    ];
    const result = checkWinner(board);
    expect(result).toEqual({
      winner: CellPlayer.O,
      combo: [2, 4, 6],
    });
  });

  it('should return null for an empty board', () => {
    const board: Board = [null, null, null, null, null, null, null, null, null];
    const result = checkWinner(board);
    expect(result).toBeNull();
  });
});
