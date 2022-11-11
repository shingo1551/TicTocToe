# from React to Stencil or Fresh

[TicTacToe](https://reactjs.org/tutorial/tutorial.html)を React と Stencil で作る

- react: React 版
- hooks: React(Hooks)版
- preact: Preact(Hooks)版
- fresh1: Fresh(signal)版
- fresh2: Fresh(Component & CustomEvent)版
- step1: React 風
- step2: Stencil 版
- step3: stencil-store (sessionStorage を使用し reload しても再現)
- use-stencil: step3 を Web Component として利用

## Size

|             | Disk |                           Js |
| :---------- | ---: | ---------------------------: |
| react       | 265M |                         136k |
| hooks       | 329M |                         136k |
| angular     | 384M |                         144k |
| preact      | 103M |                        14.8k |
| fresh1      |   1M |                        17.3k |
| fresh2      |   1M |                        13.4k |
| step1       |  16M |                        11.3k |
| step2       |  16M |                        12.7k |
| step3       |  16M |                        11.7k |
| use-stencil |  42M | 20.4k(webpack) 18.5k(rollup) |

## [use-stencil on GitHub Pages](https://shingo1551.github.io/TicTocToe/)

## [Fresh on Deno Deploy](https://tictoctoe.deno.dev/)
