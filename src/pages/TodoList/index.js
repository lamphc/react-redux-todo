import React from 'react';

function TodoList(props) {
  const { list, toggle, del } = props;
  // 切换任务状态
  const handlerToggle = (id) => {
    toggle(id)
  }
  // 删除任务
  const delTask = (id) => {
    del(id)
  }
  if (list.length === 0) {
    return <p>暂无任务</p>
  }
  return (
    <ul>
      {
        list.map((item) => <li key={item.id}>
          <span onClick={() => handlerToggle(item.id)} className={item.done ? 'done' : ''}>{item.task}</span>
          {item.done ? <button className='btn-status ok'>&radic;</button> : null}
          <button onClick={() => delTask(item.id)} className="btn-status del">&times;</button>
        </li>)
      }

    </ul>
  );
}


export default TodoList;