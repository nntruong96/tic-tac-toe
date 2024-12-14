import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalPrompts from './index';
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

describe('ModalPrompts component', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProvider(<ModalPrompts />);
    expect(container).toBeInTheDocument();
  });

  it('does not render when isOpenModal is false', () => {
    const { queryByText } = renderWithProvider(<ModalPrompts />);
    expect(queryByText('ROUND TIED')).not.toBeInTheDocument();
  });

  it('renders the correct winner message for Player 1', () => {
    const { getByText, getByTestId } = renderWithProvider(<ModalPrompts />, {
      ...mockContext,
      isOpenModal: true,
      winner: CellPlayer.X,
    });
    expect(getByText('Player 1 wins!')).toBeInTheDocument();
    expect(getByText('TAKES THE ROUND')).toBeInTheDocument();
    expect(getByTestId('modal-icon-x')).toBeInTheDocument();
  });

  it('renders the correct winner message for Player 2', () => {
    const { getByText, getByTestId } = renderWithProvider(<ModalPrompts />, {
      ...mockContext,
      isOpenModal: true,
      winner: CellPlayer.O,
    });
    expect(getByText('Player 2 wins!')).toBeInTheDocument();
    expect(getByText('TAKES THE ROUND')).toBeInTheDocument();
    expect(getByTestId('modal-icon-o')).toBeInTheDocument();
  });

  it('renders the correct message for a tie', () => {
    const { getByText } = renderWithProvider(<ModalPrompts />, {
      ...mockContext,
      isOpenModal: true,
      winner: null,
    });
    expect(getByText('ROUND TIED')).toBeInTheDocument();
  });

  it('calls setIsOpenModal when Quit button is clicked', () => {
    const { getByText } = renderWithProvider(<ModalPrompts />, {
      ...mockContext,
      isOpenModal: true,
    });
    fireEvent.click(getByText('Quit'));
    expect(mockContext.setIsOpenModal).toHaveBeenCalledWith(false);
  });

  it('calls reset and setIsOpenModal when Next round button is clicked', () => {
    const { getByText } = renderWithProvider(<ModalPrompts />, {
      ...mockContext,
      isOpenModal: true,
    });
    fireEvent.click(getByText('Next round'));
    expect(mockContext.reset).toHaveBeenCalled();
    expect(mockContext.setIsOpenModal).toHaveBeenCalledWith(false);
  });
});
