# from R(React) to S(Stencil)

## import

### R
```
import React from 'react';
import './Game.css';
```

### S
```
import { Component, h, State } from "@stencil/core";
```

## Square

    className -> class

### R
```
    <button className="square" onClick={props.onClick}>
```

### S
```
    <button class="square" onClick={props.onClick}>
```

## Board

### R

```
class Board extends React.Component {
```

## renderSquare

### R

```
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
```

### S

```
function renderSquare(props, i) {
  return (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  );
}
```

## Board::rendar

### R

```
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
            ...
```

### S

```
function Board(props) {
  return (
    <div>
      <div class="board-row">
        {renderSquare(props, 0)}
        {renderSquare(props, 1)}
          ...
```

## Game

### R

```
class Game extends React.Component {
  ...

export default Game;
```

### S
```
@Component({
  tag: "app-game",
  styleUrl: "app-game.css",
  shadow: true,
})
export class AppGame {
  ...
```

## state

### R
```
  constructor(props) {
    super(props);
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
```

### S
```
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
```

## handleClick

### R

    this.setState

```
  handleClick(i) {
      ...

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
```

### S
```
  handleClick(i) {
      ...

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
```

## jumpTo

### R

    this.setState

```
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
```

### S
```
  jumpTo(step) {
    this.state = {
      history: this.state.history,
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    };
  }
```

## rendar

    className -> class
