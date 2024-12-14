import React from 'react';
import { render } from '@testing-library/react';
import GameStatistics from './index';
import { GameContext, GameContextValue } from '@/providers/GameProvider';
import '@testing-library/jest-dom';
// import { CellPlayer } from '@/types/enum';

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

describe('GameStatistics component', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProvider(<GameStatistics />);
    expect(container).toBeInTheDocument();
  });

  it('displays the correct statistics for X, O, and ties', () => {
    const { getByText } = renderWithProvider(<GameStatistics />, {
      ...mockContext,
      gameStatistics: { X: 5, O: 3, tie: 2 },
    });

    expect(getByText('X (P1)')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('O (P2)')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('Ties')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });

  it('applies the correct class names based on the statistics', () => {
    const { container } = renderWithProvider(<GameStatistics />, {
      ...mockContext,
      gameStatistics: { X: 1, O: 1, tie: 1 },
    });

    const xStat = container.querySelector('.bg-teal-400');
    const oStat = container.querySelector('.bg-yellow-400');
    const tieStat = container.querySelector('.bg-silver-400');

    expect(xStat).toBeInTheDocument();
    expect(oStat).toBeInTheDocument();
    expect(tieStat).toBeInTheDocument();
  });
});
