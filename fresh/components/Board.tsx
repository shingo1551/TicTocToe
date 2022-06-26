/** @jsx h */
import { h, Component } from 'preact';
import Square from './Square.tsx';

interface Props {
  squares: string[];
}

export default class Board extends Component<Props> {

  render() {
    console.log('Board');
    const props = this.props;
    return (
      <div>
        <div className='board-row'>
          <Square index={0} label={props.squares[0]} />
          <Square index={1} label={props.squares[1]} />
          <Square index={2} label={props.squares[2]} />
        </div>
        <div className='board-row'>
          <Square index={3} label={props.squares[3]} />
          <Square index={4} label={props.squares[4]} />
          <Square index={5} label={props.squares[5]} />
        </div>
        <div className='board-row'>
          <Square index={6} label={props.squares[6]} />
          <Square index={7} label={props.squares[7]} />
          <Square index={8} label={props.squares[8]} />
        </div>
      </div>)
  }
}
