'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import { CellPlayer } from '@/types/enum';
import { checkWinner } from '@/lib/utils';
import { Board } from '@/types/type';

interface GameContextValue {
  board: (CellPlayer | null)[];
  isXNext: boolean;
  isOpenModal: boolean;
  winner: CellPlayer | null;
  winnerCombo: number[];
  setIsOpenModal: (isOpen: boolean) => void;
  handleCellClick: (index: number) => void;
  isOpenModalReset: boolean;
  setOpenModalReset: (isOpen: boolean) => void;
  reset: () => void;
}
const GameContext = createContext<GameContextValue | null>(null);
export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within GameProvider');
  }
  return context;
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalReset, setOpenModalReset] = useState(false);
  const [winner, setWinner] = useState<CellPlayer | null>(null);
  const [winnerCombo, setWinnerCombo] = useState<number[]>([]);
  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? CellPlayer.X : CellPlayer.O;
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const currentWinner = checkWinner(newBoard);
    if (!newBoard.includes(null) || currentWinner) {
      setIsOpenModal(true);
      setWinner(currentWinner?.winner || null);
      setWinnerCombo(currentWinner?.combo || []);
    }
  };
  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinnerCombo([]);
  };
  const value = {
    board,
    isXNext,
    isOpenModal,
    winner,
    winnerCombo,
    setIsOpenModal,
    handleCellClick,
    reset,
    isOpenModalReset,
    setOpenModalReset,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
