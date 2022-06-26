/** @jsx h */
import { h } from 'preact';
import { useEffect, useRef, Ref } from 'preact/hooks';

import Board from '../components/Board.tsx';
import { MoveEvent } from '../components/Square.tsx';

export default function Home() {
  const game = useRef(null) as Ref<HTMLDivElement>;

  const labels = ['O', 'X', '', '', '', '', '', '', ''];

  function handleMove(e: Event) {
    console.log((e as MoveEvent).detail);
  }

  useEffect(() => {
    game.current?.addEventListener('move', handleMove);
    return () => game.current?.removeEventListener('move', handleMove);
  }, []);

  return (
    <div class='game' ref={game}>
      <Board labels={labels} />
    </div>
  );
}
