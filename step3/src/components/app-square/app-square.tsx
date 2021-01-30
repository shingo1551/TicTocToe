import { Component, h, Prop } from '@stencil/core';
import { move } from '../../utils/game';

@Component({
  tag: 'app-square',
  styleUrl: 'app-square.css',
  shadow: true,
})
export class AppSquare {
  @Prop() index: number;
  @Prop() label: string;

  render() {
    console.log('square', this.index);

    return (
      <button class="square" onClick={() => move(this.index)}>
        {this.label}
      </button>
    );
  }
}
