'use client';
import Button from '@/components/Button';
import Link from 'next/link';
import { useGameContext } from '@/providers/GameProvider';
export default function Home() {
  const { resetGameStatistics } = useGameContext();
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Link href="/game" className="w-full max-w-[460px]">
        <Button onClick={resetGameStatistics} color="teal" size="large" className="w-full ">
          New Game
        </Button>
      </Link>
    </main>
  );
}
