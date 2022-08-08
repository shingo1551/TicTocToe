/** @jsx h */
import { h } from 'preact';

interface Props {
  label: string;
  index: number;
}

export default function Square(props: Props) {
  console.log('Square', props.index);

  return (
    <button class='square' >
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
