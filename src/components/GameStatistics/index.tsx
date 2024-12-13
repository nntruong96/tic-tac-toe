import { useGameContext } from '@/providers/GameProvider';
import { useMemo } from 'react';
import { CellPlayer } from '@/types/enum';
import classNames from 'classnames';
export default function GameStatistics() {
  const { gameStatistics } = useGameContext();
  const data = useMemo(() => {
    return [
      {
        label: 'X (P1)',
        value: gameStatistics[CellPlayer.X],
        className: 'bg-teal-400',
      },
      {
        label: 'Ties',
        value: gameStatistics.tie,
        className: 'bg-silver-400',
      },
      {
        label: 'O (P2)',
        value: gameStatistics[CellPlayer.O],
        className: 'bg-yellow-400',
      },
    ];
  }, [gameStatistics]);
  return (
    <div className="grid grid-cols-3 w-full mt-8 gap-5 text-navy-600">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames(
              'flex flex-col items-center justify-center col-span-1 min-h-[72px] rounded-xl',
              item.className
            )}
          >
            <p className="text-sm">{item.label}</p>
            <p className="font-bold text-[24px]">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
