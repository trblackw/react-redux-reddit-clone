export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_SUBREDDIT = "FETCH_SUBREDDIT";

export function fetchPosts() {
  return async dispatch => {
    const res = await fetch("https://www.reddit.com/r/all/top.json?limit=25");
    const posts = await res.json();

    return dispatch({
      type: "FETCH_POSTS",
      posts: posts.data.children.map(post => post.data)
    });
  };
}

export function fetchSubreddit(search) {
  return async dispatch => {
    const res = await fetch(
      `https://www.reddit.com/r/${search}/top.json?limit=25`
    );
     const posts = await res.json();
     console.log(search);

    return dispatch({
      type: "FETCH_SUBREDDIT",
      posts: posts.data.children.map(post => post.data),
      search
    });
  };
}
