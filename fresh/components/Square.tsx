/** @jsx h */
import { Component, h } from 'preact';
import { emit, StepDetail } from '../utils/helper.ts'

interface Props {
  label: string;
  index: number;
}

export default class Square extends Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>) {
    return nextProps.label != this.props.label;
  }

  handleClick = (e: Event) => emit<StepDetail>('move', e.target, { index: this.props.index });

  render() {
    console.log('Square', this.props.index);

    return (
      <button class='square' onClick={this.handleClick}>
        {this.props.label}
      </button >
    );
  }
}
