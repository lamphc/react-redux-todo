import React from 'react';


function AddTodo(props) {
  const { add } = props;

  // 获取元素对象
  let inputDom;
  // 添加任务
  let addTask = () => {
    let task = inputDom.value.trim();
    // 处理空值
    if (!task) return;
    add(task);
    // 清空输入
    inputDom.value = ''
  }

  return (
    <div>
      <input ref={(e) => inputDom = e} type="text" />
      <button onClick={addTask} className="btn">添加</button>
    </div>
  );
}

export default AddTodo;