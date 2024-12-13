import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useGameContext } from '@/providers/GameProvider';
import { CellPlayer } from '@/types/enum';
import { XIcon, OIcon } from '@/components/Icons';
import Button from '@/components/Button';
import classNames from 'classnames';
export default function ModalPrompts() {
  const { isOpenModal, setIsOpenModal, winner, reset } = useGameContext();
  const onClose = () => {
    setIsOpenModal(false);
  };
  console.log('isOpenModal', isOpenModal);
  const context = useMemo(() => {
    switch (winner) {
      case CellPlayer.X:
        return {
          icon: <XIcon className="w-[64px] h-[64px]" />,
          title: 'Player 2 wins!',
          color: 'text-teal-400',
        };
      case CellPlayer.O:
        return {
          icon: <OIcon className="w-[64px] h-[64px]" />,
          title: 'Player 1 wins!',
          color: 'text-yellow-400',
        };

      default:
        return {
          icon: null,
          title: '',
        };
    }
  }, [winner]);
  const onReset = () => {
    reset();
    onClose();
  };
  if (!isOpenModal) return null;
  return ReactDOM.createPortal(
    <div className="fixed w-[100dvw] inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative min-h-[266px] gap-4 flex flex-col items-center justify-center bg-navy-500 rounded-lg p-2 w-full ">
        {winner && (
          <>
            <p className="text-silver-400 font-bold">{context.title}</p>
            <div
              className={classNames(
                'flex items-center justify-center gap-4 font-bold text-[40px]',
                context.color
              )}
            >
              {context.icon}
              TAKES THE ROUND
            </div>
          </>
        )}
        {!winner && <p className="font-bold text-[40px] text-silver-400">ROUND TIED</p>}
        <div className="flex gap-4">
          <Button color="silver" onClick={onClose} className="w-[76px]">
            Quit
          </Button>
          <Button color="yellow" onClick={onReset} className="w-[146px]">
            Next round
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
