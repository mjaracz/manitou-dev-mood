export const FETCH_STORY = 'FETCH_STORY'
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS'
export const FETCH_STORY_FAILURE = 'FETCH_STORY_FAILURE'

export const fetchStory = () => ({
  type: FETCH_STORY
})

export const fetchStorySuccess = (story) => ({
  type: FETCH_STORY_SUCCESS,
  payload: story
})

export const fetchStoryFailure = (message) => ({
  type: FETCH_STORY_FAILURE,
  payload: message
})
