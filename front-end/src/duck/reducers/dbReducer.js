import {FETCH_STORY, FETCH_STORY_SUCCESS, FETCH_STORY_FAILURE} from '../actions/dbActions'

const InitialState = {
  story: [],
  isLoading: false,
  error: null
}

export const dbReducer = (state=InitialState, action) => {
  switch(action.type) {
    case FETCH_STORY: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case FETCH_STORY_SUCCESS: {
      return {
        ...state,
        story: action.payload,
        isLoading: false,
        error: null
      }
    }
    case FETCH_STORY_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}