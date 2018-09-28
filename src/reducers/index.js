import { FETCH_POSTS } from "../actions/index";

const initialState = {
  posts: [],
  images: []
};

export default function(state = initialState, action) {
  const { type, posts, image } = action;
  switch (type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts,
        images: image
      };
    default:
      return state;
  }
}
