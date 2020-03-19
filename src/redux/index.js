/**
 * 配置store
 */

import { createStore } from "redux";
import reducer from "./reducer";

export default function configStore() {
  const store = createStore(reducer);
  console.log(store)
  // 监听变化
  store.subscribe(() => {
    console.log('cg:', store.getState())
  })
  return store
}