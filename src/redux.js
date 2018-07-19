import { combineReducers } from 'redux';
import cart from './cart/duck';
import comment from './comments/duck';

const rootReducer = combineReducers({
  cart,
  comment,
})

export default rootReducer
