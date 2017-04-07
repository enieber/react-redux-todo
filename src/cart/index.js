import { combineReducers } from 'redux'
import cart from './reducers'
import comment from '../comments/CommentsReducers'

const rootReducer = combineReducers({
  cart,
  comment,
})

export default rootReducer
