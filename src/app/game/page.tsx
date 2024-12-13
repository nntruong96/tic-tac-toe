'use client';
import GameBoard from '@/components/GameBoard';
import GameControl from '@/components/GameControl';
import ModalPrompts from '@/components/ModalPrompts';
import ModalConfirmReset from '@/components/ModalConfirmReset';
import GameStatistics from '@/components/GameStatistics';
export default function GamePage() {
  return (
    <div className="w-full h-full max-w-[460px] mx-auto flex flex-col items-center justify-center ">
      <GameControl />
      <GameBoard />
      <GameStatistics />
      <ModalPrompts />
      <ModalConfirmReset />
    </div>
  );
}
