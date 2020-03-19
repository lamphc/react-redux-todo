import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/actions';

function TodoList(props) {
  const { list, dispatch } = props;
  // 切换任务状态
  const handlerToggle = (id) => {
    dispatch(toggleTodo(id))
  }
  // 删除任务
  const delTask = (id) => {
    dispatch(deleteTodo(id))
  }
  if (list.length === 0) {
    return <p>暂无任务</p>
  }
  return (
    <ul>
      {
        list.map((item) => <li key={item.id}><span onClick={() => handlerToggle(item.id)} className={item.done ? 'done' : ''}>{item.task}</span>
          <button onClick={() => delTask(item.id)} className="btn-del">x</button></li>)
      }

    </ul>
  );
}


const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps);
  return {
    list: state
  }
}
export default connect(mapStateToProps)(TodoList);