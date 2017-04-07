import { createStore } from 'redux'
import rootReducer from './cart'

export default(initialState) => {
  return createStore(rootReducer, initialState)
}
