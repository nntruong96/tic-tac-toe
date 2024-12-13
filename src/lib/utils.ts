import { Board } from '@/types/type';
import { CellPlayer } from '@/types/enum';
import { GameStatistics } from '@/types/interface';
interface checkWinnerResponse {
  winner: CellPlayer;
  combo: number[];
}
export function checkWinner(board: Board): checkWinnerResponse | null {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        combo,
      };
    }
  }

  return null;
}

export function loadGameStatistics(): GameStatistics {
  const GameStatistics = localStorage.getItem('GameStatistics');
  let res = { [CellPlayer.X]: 0, [CellPlayer.O]: 0, tie: 0 };
  if (!GameStatistics) return res;
  try {
    res = JSON.parse(GameStatistics);
  } catch {}
  return res;
}

export function saveGameStatistics(GameStatistics: GameStatistics) {
  localStorage.setItem('GameStatistics', JSON.stringify(GameStatistics));
}
