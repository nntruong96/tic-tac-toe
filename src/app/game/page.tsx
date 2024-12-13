'use client';
import GameBoard from '@/components/GameBoard';
import GameControl from '@/components/GameControl';
import ModalPrompts from '@/components/ModalPrompts';
export default function GamePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <GameControl />
      <GameBoard />
      <ModalPrompts />
    </div>
  );
}
