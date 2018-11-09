import { SIGN_IN } from '../actions/types'; 
//ADD_TEXT, LISTED_USER, 
const InitialState = {
  texts: [],
  item: {},
  signin: false
}

export const userReducer = (state=InitialState, action) => {
  switch(action.type) {
    // case ADD_TEXT: {
    //  return {
    //    ...state,
    //    texts: action.payload
    //  }
    // }
    // case LISTED_USER: {
    //   return {
    //     ...state,
    //     items: action.payload
    //   }
    // }
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