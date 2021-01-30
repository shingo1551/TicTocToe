import { Component, h, Prop } from '@stencil/core';
import { Squares } from '../../utils/game';

@Component({
  tag: 'app-board',
  styleUrl: 'app-board.css',
  shadow: true,
})
export class AppBoard {
  @Prop() squares: Squares;

  render() {
    console.log('board');

    const squares = this.squares;

    return (
      <div>
        <div class='board-row'>
          <app-square label={squares[0]} index={0}></app-square>
          <app-square label={squares[1]} index={1}></app-square>
          <app-square label={squares[2]} index={2}></app-square>
        </div>
        <div class='board-row'>
          <app-square label={squares[3]} index={3}></app-square>
          <app-square label={squares[4]} index={4}></app-square>
          <app-square label={squares[5]} index={5}></app-square>
        </div>
        <div class='board-row'>
          <app-square label={squares[6]} index={6}></app-square>
          <app-square label={squares[7]} index={7}></app-square>
          <app-square label={squares[8]} index={8}></app-square>
        </div>
      </div>
    );
  }
}
