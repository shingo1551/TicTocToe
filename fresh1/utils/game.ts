import { StateUpdater } from "preact/hooks";

export type Squares = string[];
export type History = Squares[];

interface State {
  history: Squares[];
  step: number;
  xIsNext: boolean;
}

export const state = {} as State;

interface Setter {
  history: StateUpdater<Squares[]>;
  step: StateUpdater<number>;
  xIsNext: StateUpdater<boolean>;
}

export const setter = {} as Setter;

export function calculateWinner(squares: Squares) {
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

export function move(index: number) {
  const h = state.history.slice(0, state.step + 1);
  const current = h[h.length - 1];
  const squares = current.slice();
  if (calculateWinner(squares) || squares[index]) return;

  squares[index] = state.xIsNext ? 'X' : 'O';

  setter.history([...h, squares]);
  setter.step(h.length);
  setter.xIsNext(!state.xIsNext);
}

export function jump(index: number) {
  setter.step(index);
  setter.xIsNext(index % 2 === 0);
}
