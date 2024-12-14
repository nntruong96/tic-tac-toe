import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GameContext, GameContextValue } from '@/providers/GameProvider';
import GameBoard from './index';
import { CellPlayer } from '@/types/enum';
import '@testing-library/jest-dom';
const mockContext: GameContextValue = {
  board: Array(9).fill(null),
  handleCellClick: jest.fn(),
  winnerCombo: [],
  winner: null,
  gameStatistics: { [CellPlayer.X]: 0, [CellPlayer.O]: 0, tie: 0 },
  isXNext: true,
  isOpenModal: false,
  isOpenModalReset: false,
  setIsOpenModal: jest.fn(),
  setOpenModalReset: jest.fn(),
  isBoardEmpty: jest.fn(),
  resetGameStatistics: jest.fn(),
  reset: jest.fn(),
};
const renderWithProvider = (ui: React.ReactElement, context: GameContextValue = mockContext) => {
  return render(<GameContext.Provider value={context}>{ui}</GameContext.Provider>);
};

describe('GameBoard component', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProvider(<GameBoard />);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of cells', () => {
    const { getAllByTestId } = renderWithProvider(<GameBoard />);
    const cells = getAllByTestId('cell');
    expect(cells.length).toBe(9);
  });

  it('calls handleCellClick when a cell is clicked', () => {
    const { getAllByTestId } = renderWithProvider(<GameBoard />);
    const cells = getAllByTestId('cell');
    fireEvent.click(cells[0]);
    expect(mockContext.handleCellClick).toHaveBeenCalled();
  });

  it('prevents interaction with cells that are already filled or when there is a winner', () => {
    const { getAllByTestId } = renderWithProvider(<GameBoard />, {
      ...mockContext,
      board: [CellPlayer.X, null, null, null, null, null, null, null, null],
      winner: CellPlayer.X,
    });
    const cells = getAllByTestId('cell');
    fireEvent.click(cells[0]);
    expect(mockContext.handleCellClick).not.toHaveBeenCalled();
  });

  it('highlights the winning combination', () => {
    const { container } = renderWithProvider(<GameBoard />, {
      ...mockContext,
      winnerCombo: [0, 1, 2],
      winner: CellPlayer.X,
    });

    const highlightedCells = container.querySelectorAll('.bg-teal-400');
    expect(highlightedCells.length).toBe(3);
  });
});
