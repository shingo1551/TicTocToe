import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { History, calculateWinner } from '../../utils/game';

@Component({
  tag: 'app-info',
  styleUrl: 'app-info.css',
  shadow: true,
})
export class AppInfo {
  @Prop() history: History;
  @Prop() step: number;
  @Prop() xIsNext: boolean;

  @Event() jump: EventEmitter<number>;

  render() {
    console.log('info');

    const winner = calculateWinner(this.history[this.step]);
    const status = winner
      ? 'Winner: ' + winner
      : 'Next player: ' + (this.xIsNext ? 'X' : 'O');

    const moves = this.history.map((_, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jump.emit(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div class='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    );
  }
}
