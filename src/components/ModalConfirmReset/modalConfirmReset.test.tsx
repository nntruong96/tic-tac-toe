import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalConfirmReset from './index';
import { GameContext, GameContextValue } from '@/providers/GameProvider';
import '@testing-library/jest-dom';

const mockContext: GameContextValue = {
  board: Array(9).fill(null),
  handleCellClick: jest.fn(),
  winnerCombo: [],
  winner: null,
  gameStatistics: { X: 0, O: 0, tie: 0 },
  isXNext: true,
  isOpenModal: false,
  isOpenModalReset: true,
  setIsOpenModal: jest.fn(),
  setOpenModalReset: jest.fn(),
  isBoardEmpty: jest.fn(),
  resetGameStatistics: jest.fn(),
  reset: jest.fn(),
};

const renderWithProvider = (ui: React.ReactElement, context: GameContextValue = mockContext) => {
  return render(<GameContext.Provider value={context}>{ui}</GameContext.Provider>);
};

describe('ModalConfirmReset component', () => {
  it('renders without crashing', () => {
    const { container } = renderWithProvider(<ModalConfirmReset />);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct text and buttons', () => {
    const { getByText } = renderWithProvider(<ModalConfirmReset />);
    expect(getByText('RESTART GAME?')).toBeInTheDocument();
    expect(getByText('No, Cancel')).toBeInTheDocument();
    expect(getByText('Yes')).toBeInTheDocument();
  });

  it('calls setOpenModalReset with false when "No, Cancel" button is clicked', () => {
    const { getByText } = renderWithProvider(<ModalConfirmReset />);
    fireEvent.click(getByText('No, Cancel'));
    expect(mockContext.setOpenModalReset).toHaveBeenCalledWith(false);
  });

  it('calls reset and setOpenModalReset with false when "Yes" button is clicked', () => {
    const { getByText } = renderWithProvider(<ModalConfirmReset />);
    fireEvent.click(getByText('Yes'));
    expect(mockContext.reset).toHaveBeenCalled();
    expect(mockContext.setOpenModalReset).toHaveBeenCalledWith(false);
  });

  it('does not render when isOpenModalReset is false', () => {
    const { queryByText } = renderWithProvider(<ModalConfirmReset />, {
      ...mockContext,
      isOpenModalReset: false,
    });
    expect(queryByText('RESTART GAME?')).not.toBeInTheDocument();
  });
});
