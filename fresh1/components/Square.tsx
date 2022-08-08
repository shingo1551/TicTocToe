/** @jsx h */
import { h } from 'preact';
import { move } from '../utils/game.ts';

interface Props {
  label: string;
  index: number;
}

export default function Square(props: Props) {
  console.log('Square', props.index);

  return (
    <button class='square' onClick={() => move(props.index)}>
      {props.label}
    </button >
  );
}
