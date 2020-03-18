// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore } from 'redux';
import reducer from './redux/reducer';
import { addTodo, deleteTodo, toggleTodo } from './redux/actions';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('学习'))
store.dispatch(addTodo('睡觉'))
store.dispatch(addTodo('睡觉'))
store.dispatch(deleteTodo(3))
store.dispatch(toggleTodo(1))

