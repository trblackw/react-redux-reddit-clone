import {
  FETCH_POSTS,
  FETCH_SUBREDDIT,
  FETCH_ALL_SUBREDDITS
} from "../actions/index";

const initialState = {
  posts: [],
  search: "",
  subreddits: []
};

export default function(state = initialState, action) {
  const { type, posts, search, subreddits } = action;
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts
      };
    case FETCH_SUBREDDIT:
      return {
        ...state,
        posts,
        search
      };
    case FETCH_ALL_SUBREDDITS:
      return {
        ...state,
        subreddits
      };
    default:
      return state;
  }
}
