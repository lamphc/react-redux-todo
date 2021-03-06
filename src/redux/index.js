/**
 * 配置store
 */

import { createStore } from "redux"
import reducer from "./reducer"

export default function configStore () {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  console.log(store)
  // 监听变化
  store.subscribe(() => {
    console.log('cg:', store.getState())
  })
  return store
}