import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh] font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full flex items-center justify-center">
        <Button color="teal" size="large" className="w-full max-w-[460px]">
          New Game
        </Button>
      </main>
    </div>
  );
}
