import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-square',
  styleUrl: 'app-square.css',
  shadow: true,
})
export class AppSquare {
  @Prop() label: string;
  @Prop() index: number;

  @Event() move: EventEmitter<number>;

  render() {
    console.log('square', this.index, this.label);

    return (
      <button class='square' onClick={() => this.move.emit(this.index)}>
        {this.label}
      </button>
    );
  }
}
