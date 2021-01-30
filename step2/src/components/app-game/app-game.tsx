import { Component, h, State, Listen } from '@stencil/core';
import { History, calculateWinner } from '../../utils/game';

@Component({
  tag: 'app-game',
  styleUrl: 'app-game.css',
  shadow: true,
})
export class AppGame {
  @State() history: History;
  @State() step: number;
  @State() xIsNext: boolean;

  componentWillLoad() {
    this.history = [Array(9).fill(null)];
    this.step = 0;
    this.xIsNext = true;
  }

  @Listen('move')
  handleMove(evt: CustomEvent<number>) {
    let i = evt.detail;

    const history = this.history.slice(0, this.step + 1);
    const current = history[history.length - 1];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.xIsNext ? 'X' : 'O';
    this.history = [...history, squares];
    this.step = history.length;
    this.xIsNext = !this.xIsNext;
  }

  handleJump = (evt: CustomEvent<number>) => {
    this.step = evt.detail;
    this.xIsNext = this.step % 2 === 0;
  };

  render() {
    console.log('game');

    return (
      <div class='game'>
        <app-board squares={this.history[this.step]}></app-board>
        <app-info
          history={this.history}
          step={this.step}
          xIsNext={this.xIsNext}
          onJump={this.handleJump}></app-info>
      </div>
    );
  }
}
