import React, { useEffect, useState } from 'preact/hooks';
import './game.css';

function Square(props: { onClick: () => void; value: string }) {
  useEffect(() => console.log('useEffect', props.value), [props.value]);

  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props: { squares: string[]; onClick: (i: number) => void }) {
  function renderSquare(i: number) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  console.log('Board');

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null) as string[]]);
  const [step, setStep] = useState(0);
  const [xIsNext, setNext] = useState(true);

  //
  function handleClick(i: number) {
    const h = history.slice(0, step + 1);
    const current = h[h.length - 1];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...h, squares]);
    setStep(h.length);
    setNext(!xIsNext);
  }

  function jumpTo(step: number) {
    setStep(step);
    setNext(step % 2 === 0);
  }

  //
  console.log('Game');

  const current = history[step];
  const winner = calculateWinner(current);

  const moves = history.map((_, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: string[]) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
