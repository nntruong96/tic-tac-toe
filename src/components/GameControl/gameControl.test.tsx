import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameControl from './index';
import { GameContext, GameContextValue } from '@/providers/GameProvider';
import '@testing-library/jest-dom';
import { CellPlayer } from '@/types/enum';
const mockContext: GameContextValue = {
  board: Array(9).fill(null),
  handleCellClick: jest.fn(),
  winnerCombo: [],
  winner: null,
  gameStatistics: { X: 0, O: 0, tie: 0 },
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

describe('GameControl component', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProvider(<GameControl />);
    expect(container).toBeInTheDocument();
  });

  it('displays the correct turn icon X', () => {
    const { getByTestId } = renderWithProvider(<GameControl />);
    expect(getByTestId('turn-x-icon')).toBeInTheDocument();
  });
  it('displays the correct turn icon O', () => {
    const { getByTestId } = renderWithProvider(<GameControl />, {
      ...mockContext,
      isXNext: false,
    });
    expect(getByTestId('turn-o-icon')).toBeInTheDocument();
  });

  it('calls setOpenModalReset when reset button is clicked and board is not empty', () => {
    (mockContext.isBoardEmpty as jest.Mock).mockReturnValue(false);
    const { getByTestId } = renderWithProvider(<GameControl />);
    fireEvent.click(getByTestId('reset-button'));
    expect(mockContext.setOpenModalReset).toHaveBeenCalled();
  });

  it('calls reset when reset button is clicked and there is a winner', () => {
    mockContext.winner = CellPlayer.X;
    const { getByTestId } = renderWithProvider(<GameControl />);
    fireEvent.click(getByTestId('reset-button'));
    expect(mockContext.reset).toHaveBeenCalled();
  });

  it('does not call setOpenModalReset or reset when reset button is clicked and board is empty', () => {
    (mockContext.isBoardEmpty as jest.Mock).mockReturnValue(true);
    const { getByTestId } = renderWithProvider(<GameControl />);
    fireEvent.click(getByTestId('reset-button'));
    expect(mockContext.setOpenModalReset).not.toHaveBeenCalled();
    expect(mockContext.reset).not.toHaveBeenCalled();
  });
});
