'use client';
import Button from '@/components/Button';
import { XIcon, OIcon, ReloadIcon } from '@/components/Icons';
import { useGameContext } from '@/providers/GameProvider';
export default function GameControl() {
  const { isXNext } = useGameContext();
  return (
    <div className="flex justify-between items-center w-full max-w-[460px] mb-6">
      <div className="flex gap-2">
        <XIcon className="text-teal-400" />
        <OIcon className="text-yellow-400" />
      </div>

      <Button color="navy" className="hover:!bg-navy-400 cursor-auto">
        <div className="flex items-center justify-center gap-2">
          {isXNext ? <XIcon className="w-5 h-5" /> : <OIcon className="w-5 h-5" />}
          TURN
        </div>
      </Button>

      <Button color="silver">
        <ReloadIcon />
      </Button>
    </div>
  );
}
