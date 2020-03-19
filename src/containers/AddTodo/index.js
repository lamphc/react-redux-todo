/**
 * 添加任务容器
 */
import { connect } from 'react-redux'
import AddTodo from '../../pages/AddTodo'
import { addTodo } from '../../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    add: (task) => {
      dispatch(addTodo(task))
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(AddTodo)

