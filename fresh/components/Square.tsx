/** @jsx h */
import { h } from 'preact';
import { IS_BROWSER } from '$fresh/runtime.ts';

interface Props {
  label: string;
  index: number;
}

export default function Suare(props: Props) {
  if (IS_BROWSER) console.log('square', props.index, props.label);

  return (
    <button class='square' onClick={(e) => move(e.target, props)}>
      {props.label}
    </button>
  );
}

function move(target: EventTarget | null, props: Props) {
  console.log(target);
  const event = new CustomEvent('move', {
    bubbles: true,
    detail: { index: props.index },
  });
  target?.dispatchEvent(event);
}
