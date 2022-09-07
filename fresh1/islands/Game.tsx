/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact';

import Board from '../components/Board.tsx';
import Info from '../components/Info.tsx';

import { state, calculateWinner } from '../utils/game.ts';

export default function Game() {
  console.log('Game');

  const value = state.value;
  const current = value.history[value.step];
  const winner = calculateWinner(current);
  const status = winner ? "Winner: " + winner : "Next player: " + (value.xIsNext ? "X" : "O");

  return (
    <div class="game">
      <Board squares={current} />
      <Info history={value.history} step={value.step} status={status} />
    </div>);
}
