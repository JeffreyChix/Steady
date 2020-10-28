import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp/TodoApp';
import reportWebVitals from './reportWebVitals';
import TimeAgo from 'javascript-time-ago' ;
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
