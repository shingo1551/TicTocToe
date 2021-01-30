import { Component, h } from '@stencil/core';
import state from '../../utils/game';

@Component({
  tag: 'app-info',
  styleUrl: 'app-info.css',
  shadow: true,
})
export class AppInfo {
  render() {
    console.log('info');

    const steps = state.history.map((_, step) => {
      const desc = step ? 'Go to step #' + step : 'Go to game start';
      return (
        <li key={step}>
          <button onClick={() => (state.step = step)}>{desc}</button>
        </li>
      );
    });

    return (
      <div class="game-info">
        <div>{state.status}</div>
        <ol>{steps}</ol>
      </div>
    );
  }
}
