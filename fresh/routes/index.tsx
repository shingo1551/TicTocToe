/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Head, asset } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

import Game from '../islands/Game.tsx';

export default function Home(props: PageProps) {
  console.log('Home');

  return (
    <>
      <Head>
        <title>TicTocToe</title>
        <meta name="description" content='TicTocToe by FRESH' />
        <link href={asset('game.css')} rel="stylesheet" />
      </Head>
      <body>
        <h3><a href="https://github.com/shingo1551/TicTocToe">from React to Fresh</a></h3>
        <Game />
      </body>
    </>
  );
}
