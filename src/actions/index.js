export const FETCH_POSTS = "FETCH_POSTS";

export function fetchPosts() {
  return async dispatch => {
    const res = await fetch("https://www.reddit.com/r/all/top.json?limit=25");
     const posts = await res.json();
     

    return dispatch({
      type: "FETCH_POSTS",
      posts: posts.data.children.map(post => post.data),
    });
  };
}
