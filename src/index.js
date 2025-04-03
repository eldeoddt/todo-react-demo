import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // app import
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/*app.js를 의미함. app 컴포넌트를 사용한다.*/}
  </React.StrictMode>, // 태그 형태가 컴포넌트이다.
  document.getElementById('root') // root 밑에 app 컴포넌트를 추가한다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
