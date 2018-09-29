import { FETCH_POSTS, FETCH_SUBREDDIT } from "../actions/index";

const initialState = {
  posts: [],
  search: ""
};

export default function(state = initialState, action) {
  const { type, posts, search } = action;
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
    default:
      return state;
  }
}
