import React from 'react';

import { useGameContext } from '@/providers/GameProvider';
import Button from '@/components/Button';

import Modal from '@/components/Modal';
export default function ModalConfirmReset() {
  const { isOpenModalReset, setOpenModalReset, reset } = useGameContext();
  const onClose = () => {
    setOpenModalReset(false);
  };
  const onReset = () => {
    reset();
    onClose();
  };
  if (!isOpenModalReset) return null;
  return (
    <Modal isOpen={isOpenModalReset}>
      <p className="font-bold text-[40px] text-silver-400">RESTART GAME?</p>
      <div className="flex gap-4">
        <Button color="silver" onClick={onClose} className="w-[139px]">
          No, Cancel
        </Button>
        <Button color="yellow" onClick={onReset} className="w-[139px]">
          Yes
        </Button>
      </div>
    </Modal>
  );
}
