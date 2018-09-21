import { ADD_TEXT, SIGN_IN } from './types';


export const addText = (arr) => (dispatch) => {
  dispatch({
    type: ADD_TEXT, 
    payload: arr
  })
}

export const userSignIn = (signin) => (dispatch) => {
  dispatch({
    type: SIGN_IN,
    payload: signin
  })
}
