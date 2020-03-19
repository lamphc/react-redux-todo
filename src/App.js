import React from 'react';
// import AddTodo from './pages/AddTodo';
// import TodoList from './pages/TodoList';
// 引入容器组件
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'

function App() {
  return (
    <div className="todoList">
      {/* 添加任务 */}
      <AddTodo />
      {/* 任务列表 */}
      <TodoList />
    </div>
  );
}

export default App;
