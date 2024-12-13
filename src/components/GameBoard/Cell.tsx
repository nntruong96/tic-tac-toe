import React from 'react';
import { CellPlayer } from '@/types/enum';
import { XIcon, OIcon } from '@/components/Icons';
import classNames from 'classnames';
interface CellProps {
  cell: null | CellPlayer;
  isHighlighted: boolean;
  disabled?: boolean;
  onClick: () => void;
}
export default function Cell({ cell, onClick, isHighlighted, disabled = false }: CellProps) {
  return (
    <div
      className={classNames(
        'col-span-1 flex items-center justify-center  w-full h-full rounded-[15px] aspect-square shadow-[0_8px_0_theme(colors.navy.600)] ',
        {
          'cursor-pointer': !disabled,
          'bg-teal-400 ': isHighlighted,
          'bg-navy-400': !isHighlighted,
        }
      )}
      onClick={onClick}
    >
      {cell === CellPlayer.X && (
        <XIcon
          className={classNames('w-[45%] h-[45%]', {
            'text-navy-400': isHighlighted,
            'text-teal-400': !isHighlighted,
          })}
        />
      )}
      {cell === CellPlayer.O && (
        <OIcon
          className={classNames('w-[45%] h-[45%]', {
            'text-navy-400': isHighlighted,
            'text-yellow-400': !isHighlighted,
          })}
        />
      )}
    </div>
  );
}
