import { createContext } from 'preact';

export type Squares = string[];
export type History = Squares[];

export const context = createContext({
  history: [Array(9).fill(null) as Squares],
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
