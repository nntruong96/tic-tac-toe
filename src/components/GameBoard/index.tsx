import Cell from './Cell';
import { useGameContext } from '@/providers/GameProvider';

export default function GameBoard() {
  const { board, handleCellClick, winnerCombo, winner } = useGameContext();
  return (
    <div className="grid grid-cols-3 w-full aspect-square max-w-[460px] max-h-[460px] gap-5 ">
      {board.map((cell, index) => (
        <Cell
          key={index}
          cell={cell}
          onClick={() => handleCellClick(index)}
          isHighlighted={winnerCombo?.includes(index)}
          disabled={!!cell || Boolean(winner)}
        />
      ))}
    </div>
  );
}
