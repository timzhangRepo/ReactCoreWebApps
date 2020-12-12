import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App'; //引入App.js这个组建
import reportWebVitals from './reportWebVitals'; //加快react运行速度的一个组件

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //渲染到root组建中
);

reportWebVitals();
