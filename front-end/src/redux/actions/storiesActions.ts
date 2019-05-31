import {action} from "./types";

export const GET_STORIES = "GET_STORIES";
export const FETCH_STORIES = "FETCH_STORIES";
export const FETCH_ERROR = "FETCH_ERROR";


export const getStories= (): action => ({
   type: GET_STORIES
});
