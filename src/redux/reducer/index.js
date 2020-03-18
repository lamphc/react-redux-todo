import * as actionTypes from '../actionTypes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      console.log('add')
      const newTodo = [...state, { id: state.length + 1, text: action.text, done: false }]
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