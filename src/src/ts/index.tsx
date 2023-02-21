// 追加
import '../sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// addNum関数の読み込みと実行結果のConsole出力
import { App } from './App';

console.log(App(1, 5));
ReactDOM.render(<App />, document.getElementById('root'));