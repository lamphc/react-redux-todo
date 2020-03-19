// action

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actionTypes'

// addTodo
// deleteTodo
// toggleTodo

const addTodo = task => ({ type: ADD_TODO, task })
const deleteTodo = id => ({ type: DELETE_TODO, id })
const toggleTodo = id => ({ type: TOGGLE_TODO, id })

export { addTodo, deleteTodo, toggleTodo }