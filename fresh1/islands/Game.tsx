/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact';
import { useState } from "preact/hooks";

import Board from '../components/Board.tsx';
import Info from '../components/Info.tsx';

import { Squares, state, setter, calculateWinner } from '../utils/game.ts';

export default function Game() {
  console.log('Game');

  const [history, setHistory] = useState([Array(9).fill(null) as Squares]);
  const [step, setStep] = useState(0);
  const [xIsNext, setNext] = useState(true);

  state.history = history;
  state.step = step;
  state.xIsNext = xIsNext;

  setter.history = setHistory;
  setter.step = setStep;
  setter.xIsNext = setNext;

  const current = history[step];
  const winner = calculateWinner(current);
  const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div class="game">
      <Board squares={current} />
      <Info history={history} step={step} status={status} />
    </div>);
}
