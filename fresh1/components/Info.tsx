/** @jsx h */
import { h } from 'preact';
import { Squares } from '../utils/game.ts';

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
        <button>{desc}</button>
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

// export default class Info extends Component<Props> {
//   handleClick = (e: Event, step: number) => emit<StepDetail>('jump', e.target, { index: step });

//   render() {
//     console.log('info');

//     const steps = this.props.history.map((_, step) => {
//       const desc = step ? 'Go to step #' + step : 'Go to game start';
//       return (
//         <li key={step}>
//           <button onClick={(e) => this.handleClick(e, step)}>{desc}</button>
//         </li>
//       );
//     });

//     return (
//       <div class="game-info">
//         <div>{this.props.status}</div>
//         <ol>{steps}</ol>
//       </div>
//     );
//   }
// }
