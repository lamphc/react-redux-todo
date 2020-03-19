import React from 'react';

// 连接store
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

function AddTodo(props) {
  const { dispatch } = props;

  // 获取元素对象
  let inputDom;
  // 添加任务
  let addTask = () => {
    let task = inputDom.value.trim();
    // 处理空值
    if (!task) return;
    dispatch(addTodo(task));
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
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(AddTodo);