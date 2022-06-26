/** @jsx h */
import { h } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { emit } from '../utils/helper.ts'

interface Props {
  label?: string;
  index: number;
}

interface MoveDetail { index: number; }

export type MoveEvent = CustomEvent<MoveDetail>

export default function Suare(props: Props) {
  if (IS_BROWSER) console.log('Square', props.index);

  return (
    <button class='square' onClick={(e) => emit<MoveDetail>('move', e.target, { index: props.index })}>
      {props.label}
    </button>
  );
}
