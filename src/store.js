import { createStore } from 'redux'
import rootReducer from './redux'

export default(initialState) => {
  return createStore(rootReducer, initialState)
}
