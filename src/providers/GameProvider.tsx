'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import { CellStatus } from '@/types/enum';
type Board = (CellStatus | null)[];
interface GameContextValue {
  board: (CellStatus | null)[];
  isXNext: boolean;
  isFinished: boolean;
  handleCellClick: (index: number) => void;
  reset: () => void;
}
const GameContext = createContext<GameContextValue | null>(null);
export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext phải được sử dụng bên trong GameProvider');
  }
  return context;
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const handleCellClick = (index: number) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? CellStatus.X : CellStatus.O;
    setBoard(newBoard);
    setIsXNext(!isXNext);
    if (!newBoard.includes(null)) {
      setIsFinished(true);
    }
  };
  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsFinished(false);
  };
  const value = {
    board,
    isXNext,
    handleCellClick,
    isFinished,
    reset,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
