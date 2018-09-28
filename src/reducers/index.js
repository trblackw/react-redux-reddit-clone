import { FETCH_POSTS } from "../actions/index";

const initialState = {
  posts: [],
  pageLoaded: false
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: data,
        pageLoaded: true
      };
    default:
      return state;
  }
}
