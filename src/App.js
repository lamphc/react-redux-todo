import React from 'react';
import AddTodo from './pages/AddTodo';
import TodoList from './pages/TodoList';

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
