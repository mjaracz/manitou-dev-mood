import {FETCH_ERROR, FETCH_STORIES, GET_STORIES} from "../actions/storiesActions";
import {action} from "../actions/types";
import {StoryState} from "./types";

const InitialState: StoryState = {
  stories: [],
  isLoading: false,
  error: null
};

export const storiesReducer = (state=InitialState, action: action) => {
  switch(action.type) {
    case GET_STORIES: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case FETCH_STORIES: {
      return {
        ...state,
        stories: action.payload,
        isLoading: false,
        error: null
      }
    }
    case FETCH_ERROR: {
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
};
