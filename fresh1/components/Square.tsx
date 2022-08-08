/** @jsx h */
import { h } from 'preact';
import { useContext } from "preact/hooks";
import { context, calculateWinner } from '../utils/game.ts';

interface Props {
  label: string;
  index: number;
}

export default function Square(props: Props) {
  console.log('Square', props.index);

  const state = useContext(context);

  const handleMove = (e: Event) => {
    const h = state.history.slice(0, state.step + 1);
    const current = h[h.length - 1];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[props.index]) return;

    squares[props.index] = state.xIsNext ? 'X' : 'O';

    state.history = [...h, squares];
    state.step = h.length;
    state.xIsNext = !state.xIsNext;

    console.log('move:', state);
  }

  return (
    <button class='square' onClick={handleMove}>
      {props.label}
    </button >
  );
}

// export default class Square extends Component<Props> {
//   shouldComponentUpdate(nextProps: Readonly<Props>) {
//     return nextProps.label != this.props.label;
//   }

//   handleClick = (e: Event) => emit<StepDetail>('move', e.target, { index: this.props.index });

//   render() {
//     console.log('Square', this.props.index);

//     return (
//       <button class='square' onClick={this.handleClick}>
//         {this.props.label}
//       </button >
//     );
//   }
// }
