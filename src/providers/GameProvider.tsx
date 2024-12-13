'use client';
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { CellPlayer } from '@/types/enum';
import { checkWinner, saveGameStatistics, loadGameStatistics } from '@/lib/utils';
import { Board } from '@/types/type';
import { GameStatistics } from '@/types/interface';
interface GameContextValue {
  board: (CellPlayer | null)[];
  isXNext: boolean;
  isOpenModal: boolean;
  winner: CellPlayer | null;
  winnerCombo: number[];
  gameStatistics: GameStatistics;
  setIsOpenModal: (isOpen: boolean) => void;
  handleCellClick: (index: number) => void;
  isBoardEmpty: (newBoard?: Board) => boolean;
  resetGameStatistics: () => void;
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
  const [gameStatistics, setGameStatistics] = useState<GameStatistics>({
    [CellPlayer.X]: 0,
    [CellPlayer.O]: 0,
    tie: 0,
  });
  const [isXNext, setIsXNext] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalReset, setOpenModalReset] = useState(false);
  const [winner, setWinner] = useState<CellPlayer | null>(null);
  const [winnerCombo, setWinnerCombo] = useState<number[]>([]);
  const isBoardFull = (newBoard: Board = board) => !newBoard.includes(null);
  const isBoardEmpty = (newBoard: Board = board) => newBoard.every((cell) => !cell);
  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? CellPlayer.X : CellPlayer.O;
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const currentWinner = checkWinner(newBoard);

    if (isBoardFull(newBoard) || currentWinner) {
      setIsOpenModal(true);
      setWinner(currentWinner?.winner || null);
      setWinnerCombo(currentWinner?.combo || []);
      if (currentWinner) {
        const newGameStatistics = {
          ...gameStatistics,
          [currentWinner.winner]: gameStatistics[currentWinner.winner] + 1,
        };
        onSaveGameStatistics(newGameStatistics);
      }
    }
    if (isBoardFull(newBoard) && !currentWinner) {
      const newGameStatistics = {
        ...gameStatistics,
        tie: gameStatistics.tie + 1,
      };
      onSaveGameStatistics(newGameStatistics);
    }
  };
  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinnerCombo([]);
  };
  const onSaveGameStatistics = (GameStatistics: GameStatistics) => {
    saveGameStatistics(GameStatistics);
    setGameStatistics(() => GameStatistics);
  };
  const resetGameStatistics = () => {
    const newGameStatistics = {
      [CellPlayer.X]: 0,
      [CellPlayer.O]: 0,
      tie: 0,
    };
    onSaveGameStatistics(newGameStatistics);
  };
  useEffect(() => {
    const GameStatistics = loadGameStatistics();
    setGameStatistics(GameStatistics);
  }, []);
  const value = {
    board,
    isXNext,
    isOpenModal,
    winner,
    winnerCombo,
    gameStatistics,
    isBoardEmpty,
    setIsOpenModal,
    handleCellClick,
    reset,
    isOpenModalReset,
    setOpenModalReset,
    resetGameStatistics,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
