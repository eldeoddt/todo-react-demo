import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
// import App from './App'; // app import

//
const container = document.getElementById("root");

// create root를 사용하여 컨테이너를 담은 root를 만든다.
const root = createRoot(container);

// App router를 반환한다.
root.render(<AppRouter tab="home" />);

// app.js
// ReactDOM.render(
//   <React.StrictMode>
//     <App /> {/*app.js를 의미함. app 컴포넌트를 사용한다.*/}
//   </React.StrictMode>, // 태그 형태가 컴포넌트이다.
//   document.getElementById('root') // root 밑에 app 컴포넌트를 추가한다.
// );

reportWebVitals();
