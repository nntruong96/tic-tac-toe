import Button from '@/components/Button';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Link href="/game" className="w-full max-w-[460px]">
        <Button color="teal" size="large" className="w-full ">
          New Game
        </Button>
      </Link>
    </main>
  );
}
