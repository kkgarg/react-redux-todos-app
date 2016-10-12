import { ADD_TODO } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case ADD_TODO:
      return [action.payload, ...state]
  }
  return state;
}
