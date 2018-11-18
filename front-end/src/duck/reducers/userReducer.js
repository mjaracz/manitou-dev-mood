import { SIGN_IN, ADD_TEXT } from '../actions/types'; 
 
const InitialState = {
  texts: [],
  item: {},
  signin: false
}

export const userReducer = (state=InitialState, action) => {
  switch(action.type) {
    case ADD_TEXT: {
     return {
       ...state,
       texts: action.payload
     }
    }
    case SIGN_IN: {
      return {
        ...state,
        signin: action.payload
      }
    }
    default: {
      return state
    }
  }
}