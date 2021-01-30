import { Component, h } from '@stencil/core';
import state from '../../utils/game';

@Component({
  tag: 'app-board',
  styleUrl: 'app-board.css',
  shadow: true,
})
export class AppBoard {
  render() {
    console.log('board');

    const labels = state.squares;

    return (
      <div>
        <div class="board-row">
          <app-square index={0} label={labels[0]} />
          <app-square index={1} label={labels[1]} />
          <app-square index={2} label={labels[2]} />
        </div>
        <div class="board-row">
          <app-square index={3} label={labels[3]} />
          <app-square index={4} label={labels[4]} />
          <app-square index={5} label={labels[5]} />
        </div>
        <div class="board-row">
          <app-square index={6} label={labels[6]} />
          <app-square index={7} label={labels[7]} />
          <app-square index={8} label={labels[8]} />
        </div>
      </div>
    );
  }
}
