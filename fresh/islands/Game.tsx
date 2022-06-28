/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, Component, h } from 'preact';

import Board from '../components/Board.tsx';
import Info from '../components/Info.tsx';

import { Squares, calculateWinner } from '../utils/game.ts';
import { StepEvent } from '../utils/helper.ts'

export default class Game extends Component {
  state = {
    history: [Array(9).fill(null) as Squares],
    step: 0,
    xIsNext: true
  }

  componentDidMount() {
    this.base?.addEventListener('move', this.handleMove);
    this.base?.addEventListener('jump', this.handleJump);
  }

  componentWillUnmount() {
    this.base?.removeEventListener('move', this.handleMove);
    this.base?.removeEventListener('jump', this.handleJump);
  }

  handleMove = (e: Event) => {
    const i = (e as StepEvent).detail.index;
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

  handleJump = (e: Event) => {
    const i = (e as StepEvent).detail.index;
    this.setState({
      step: i,
      xIsNext: i % 2 === 0
    });
  };

  render() {
    console.log('Game');

    const state = this.state;
    const current = state.history[state.step];
    const winner = calculateWinner(current);
    const status = winner ? "Winner: " + winner : "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div class="game">
        <Board squares={current} />
        <Info history={state.history} step={state.step} status={status} />
      </div>);
  }
}
