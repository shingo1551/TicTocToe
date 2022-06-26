/** @jsx h */
import { h, Component } from 'preact';

import Board from '../components/Board.tsx';
import { MoveEvent } from '../components/Square.tsx';

import { Squares, calculateWinner } from '../utils/game.ts';

interface State {
  history: Squares[];
  step: number;
  xIsNext: boolean;
}

export default class Game extends Component<{}, State> {
  state = {
    history: [Array(9).fill(null) as Squares],
    step: 0,
    xIsNext: true
  }

  componentDidMount() {
    console.log(this.base);
    this.base?.addEventListener('move', this.handleMove);
  }

  componentWillUnmount() {
    this.base?.removeEventListener('move', this.handleMove);
  }

  handleMove = (e: Event) => {
    console.log((e as MoveEvent).detail);
    const i = (e as MoveEvent).detail.index;

    const state = this.state;

    const h = state.history.slice(0, state.step + 1);
    const current = h[h.length - 1];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = state.xIsNext ? 'X' : 'O';

    this.setState({
      history: [...h, squares],
      step: h.length,
      xIsNext: !state.xIsNext
    });
  }

  render() {
    console.log('Game');

    const state = this.state;
    const current = state.history[state.step];
    const winner = calculateWinner(current);

    return <Board squares={current} />
  }
}
