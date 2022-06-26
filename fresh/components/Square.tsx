/** @jsx h */
import { h, Component } from 'preact';
import { emit } from '../utils/helper.ts'

interface Props {
  label: string;
  index: number;
}

interface MoveDetail { index: number; }

export type MoveEvent = CustomEvent<MoveDetail>

export default class Square extends Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>) {
    return nextProps.label != this.props.label;
  }

  handleClick = (e: Event) => emit<MoveDetail>('move', e.target, { index: this.props.index });

  render() {
    console.log('Square', this.props.index);

    return (
      <button class='square' onClick={this.handleClick}>
        {this.props.label}
      </button >
    );
  }
}
