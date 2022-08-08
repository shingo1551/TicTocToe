/** @jsx h */
import { h } from 'preact';
import { Squares, jump } from '../utils/game.ts';

interface Props {
  history: Squares[];
  step: number;
  status: string | null;
}

export default function Info(props: Props) {
  console.log('info');

  const steps = props.history.map((_, step) => {
    const desc = step ? 'Go to step #' + step : 'Go to game start';
    return (
      <li key={step}>
        <button onClick={() => jump(step)}>{desc}</button>
      </li>
    );
  });

  return (
    <div class="game-info">
      <div>{props.status}</div>
      <ol>{steps}</ol>
    </div>
  );
}
