'use client';
import Button from '@/components/Button';
import { XIcon, OIcon, ReloadIcon } from '@/components/Icons';

export default function GameControl() {
  return (
    <div className="flex justify-between items-center w-full max-w-[460px] mb-6">
      <div className="flex gap-2">
        <XIcon className="text-teal-400" />
        <OIcon className="text-yellow-400" />
      </div>

      <Button color="navy">
        <div className="flex items-center justify-center gap-2">
          <XIcon className="w-5 h-5" />
          TURN
        </div>
      </Button>

      <Button color="silver">
        <ReloadIcon />
      </Button>
    </div>
  );
}
