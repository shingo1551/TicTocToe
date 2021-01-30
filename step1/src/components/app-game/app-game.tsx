import { Component, h, State } from "@stencil/core";

function Square(props) {
  return (
    <button class="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function renderSquare(props, i) {
  return (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  );
}

function Board(props) {
  return (
    <div>
      <div class="board-row">
        {renderSquare(props, 0)}
        {renderSquare(props, 1)}
        {renderSquare(props, 2)}
      </div>
      <div class="board-row">
        {renderSquare(props, 3)}
        {renderSquare(props, 4)}
        {renderSquare(props, 5)}
      </div>
      <div class="board-row">
        {renderSquare(props, 6)}
        {renderSquare(props, 7)}
        {renderSquare(props, 8)}
      </div>
    </div>
  );
}

@Component({
  tag: "app-game",
  styleUrl: "app-game.css",
  shadow: true,
})
export class AppGame {
  @State() state: any;

  componentWillLoad() {
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.state = {
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    };
  }

  jumpTo(step) {
    this.state = {
      history: this.state.history,
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    };
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((_step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div class="game">
        <div class="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div class="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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
