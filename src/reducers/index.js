import { FETCH_POSTS } from "../actions/index";

const initialState = {
  posts: [],
};

export default function(state = initialState, action) {
  const { type, posts, images } = action;
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
}
