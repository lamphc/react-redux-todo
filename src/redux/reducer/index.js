import * as actionTypes from '../actionTypes'

const initdata = [
  { id: 1, task: '学习', done: true },
  { id: 2, task: '健身', done: false },
  { id: 3, task: '游戏', done: false }
]
const reducer = (state = initdata, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      console.log('add')
      // 生成唯一ID
      let id = Math.random().toString(16).slice(2);
      const newTodo = [...state, { id, task: action.task, done: false }]
      return newTodo
    case actionTypes.DELETE_TODO:
      return state.filter((item) => item.id !== action.id)
    case actionTypes.TOGGLE_TODO:
      return state.map((item) => {
        let tempItem = { ...item };
        if (tempItem.id === action.id) {
          tempItem.done = !tempItem.done
        }
        return tempItem
      })
    default:
      return state;
  }
}

export default reducer;