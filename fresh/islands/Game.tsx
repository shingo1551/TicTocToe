/** @jsx h */
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Square from '../components/Square.tsx';

export default function Home() {
  function onMove(e: any) {
    console.log(e);
  }
  useEffect(() => {
    const game = document.querySelector('.game');
    game?.addEventListener('move', onMove);
    return window.removeEventListener('move', onMove);
  }, []);
  return (
    <div class='game'>
      <Square label={'X'} index={1} />
    </div>
  );
}
