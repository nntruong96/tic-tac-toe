import React from 'react';
import { CellStatus } from '@/types/enum';
import { XIcon, OIcon } from '@/components/Icons';
import classNames from 'classnames';
interface CellProps {
  cell: null | CellStatus;
  onClick: () => void;
}
export default function Cell({ cell, onClick }: CellProps) {
  return (
    <div
      className={classNames(
        'col-span-1 flex items-center justify-center bg-navy-400 w-full h-full rounded-[15px] aspect-square shadow-[0_8px_0_theme(colors.navy.600)] ',
        {
          'cursor-pointer': !cell,
        }
      )}
      onClick={onClick}
    >
      {cell === CellStatus.X && <XIcon className="w-[45%] h-[45%] text-teal-400" />}
      {cell === CellStatus.O && <OIcon className="w-[45%] h-[45%] text-yellow-400" />}
    </div>
  );
}
