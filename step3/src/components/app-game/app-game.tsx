import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-game',
  styleUrl: 'app-game.css',
  shadow: true,
})
export class AppGame {
  render() {
    console.log('game');

    return (
      <div class="game">
        <app-board />
        <app-info />
      </div>
    );
  }
}
