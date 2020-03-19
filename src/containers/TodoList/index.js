/**
 * 任务列表容器
 */
import { connect } from 'react-redux'
import TodoList from '../../pages/TodoList'
import { toggleTodo, deleteTodo } from '../../redux/actions'

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (id) => {
      dispatch(toggleTodo(id))
    },
    del: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)