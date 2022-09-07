import { signal } from "@preact/signals";

export type Squares = string[];
export type History = Squares[];

interface State {
  history: Squares[];
  step: number;
  xIsNext: boolean;
}

export const state = signal<State>({
  history: [Array(9).fill(null)],
  step: 0,
  xIsNext: true
});

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
  const value = state.value;

  const h = value.history.slice(0, value.step + 1);
  const current = h[h.length - 1];
  const squares = current.slice();
  if (calculateWinner(squares) || squares[index]) return;

  squares[index] = value.xIsNext ? 'X' : 'O';

  state.value = {
    history: [...h, squares],
    step: h.length,
    xIsNext: !value.xIsNext
  };
}

export function jump(index: number) {
  state.value = {
    history: state.value.history,
    step: index,
    xIsNext: index % 2 === 0
  }
}
