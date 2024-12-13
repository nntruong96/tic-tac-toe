import React, { useMemo } from 'react';
import { useGameContext } from '@/providers/GameProvider';
import { CellPlayer } from '@/types/enum';
import { XIcon, OIcon } from '@/components/Icons';
import Button from '@/components/Button';
import classNames from 'classnames';
import Modal from '@/components/Modal';
export default function ModalPrompts() {
  const { isOpenModal, setIsOpenModal, winner, reset } = useGameContext();
  const onClose = () => {
    setIsOpenModal(false);
  };
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
  return (
    <Modal isOpen={isOpenModal}>
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
    </Modal>
  );
}
