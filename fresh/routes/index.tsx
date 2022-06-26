/** @jsx h */
import { h } from 'preact';
import Counter from '../islands/Counter.tsx';
import Game from '../islands/Game.tsx';

export default function Home() {
  return (
    <div>
      <Game />
      <Counter start={3} />
    </div>
  );
}
