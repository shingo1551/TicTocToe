import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  history: string[][];
  step = 0;
  xIsNext = true;
  squares: string[];
  winner: string | null;
  status = '';

  constructor() {
    this.history = [Array(9).fill(null)];
    this.squares = this.history[0];
    this.winner = null;
  }

  changeStep = (value: number) => {
    const state = this;

    state.xIsNext = value % 2 === 0;
    state.squares = state.history[value];
    state.winner = this.calculateWinner(state.squares);
    state.status = state.winner ? 'Winner: ' + state.winner : 'Next player: ' + (state.xIsNext ? 'X' : 'O');

    this.saveStorage();
  }

  //
  move = (i: number) => {
    const state = this;

    const history = state.history.slice(0, state.step + 1);
    const current = history[history.length - 1];
    const squares = current.slice();
    if (this.calculateWinner(squares) || squares[i]) return;

    squares[i] = state.xIsNext ? 'X' : 'O';
    state.history = [...history, squares];
    state.step = history.length;

    this.changeStep(state.step);
  }

  calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const sa = squares[a];
      if (sa && sa === squares[b] && sa === squares[c]) {
        return sa;
      }
    }
    return null;
  }

  //
  loadStorage = () => {
    const state = this;

    const str = sessionStorage.getItem('game');
    if (str) {
      const game = JSON.parse(str);
      state.history = game.history;
      state.step = game.step;
    }
  }

  saveStorage() {
    const state = this;

    const game = {
      history: state.history,
      step: state.step,
    };
    sessionStorage.setItem('game', JSON.stringify(game));
  }
}
