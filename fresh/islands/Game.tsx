/** @jsx h */
import { h, Component } from 'preact';

import Board from '../components/Board.tsx';
import { MoveEvent } from '../components/Square.tsx';

export default class Game extends Component {
  componentDidMount() {
    console.log(this.base);
    this.base?.addEventListener('move', this.handleMove);
  }

  componentWillUnmount() {
    this.base?.removeEventListener('move', this.handleMove);
  }

  handleMove = (e: Event) => {
    console.log((e as MoveEvent).detail);
  }

  render() {
    console.log('Game');

    const squares = ['', '', '', '', '', '', '', '', ''];
    return <Board squares={squares} />
  }
}
