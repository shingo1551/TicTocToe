/** @jsx h */
import { h } from 'preact';
import Square from './Square.tsx';

interface Props {
  labels: string[];
}

export default function Board(props: Props) {
  console.log('Board');

  return (
    <div>
      <div className='board-row'>
        <Square index={0} label={props.labels[0]} />
        <Square index={1} label={props.labels[1]} />
        <Square index={2} label={props.labels[2]} />
      </div>
      <div className='board-row'>
        <Square index={3} label={props.labels[3]} />
        <Square index={4} label={props.labels[4]} />
        <Square index={5} label={props.labels[5]} />
      </div>
      <div className='board-row'>
        <Square index={6} label={props.labels[6]} />
        <Square index={7} label={props.labels[7]} />
        <Square index={8} label={props.labels[8]} />
      </div>
    </div>
  );
}
