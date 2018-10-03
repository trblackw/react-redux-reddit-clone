export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";
export const FETCH_SUBREDDIT = "FETCH_SUBREDDIT";
export const FETCH_ALL_SUBREDDITS = "FETCH_ALL_SUBREDDITS";

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

export function fetchSinglePost(id) {
   return async dispatch => {
      const res = await fetch(`https://www.reddit.com${id}`);
      const post = await res.json();
      console.log(post)
      return dispatch({
         type: "FETCH_SINGLE_POST",
         posts: post,
      })

   }
}

export function fetchSubreddit(search) {
  return async dispatch => {
    const res = await fetch(
      `https://www.reddit.com/r/${search}/top.json?limit=25`
    );
     const posts = await res.json();

    return dispatch({
      type: "FETCH_SUBREDDIT",
      posts: posts.data.children.map(post => post.data),
      search
    });
  };
}

// export function fetchAllSubreddits() {
//    return async dispatch => {
//       const res = await fetch("https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits.json?limit=100");
//       const wikiPage = res.json();
//       const subreddits = [...new Set(wikiPage.data.content_html.match(/\/r\/\w+/gi)).keys()];

//       return dispatch({
//          type: "FETCH_ALL_SUBREDDITS",
//          subreddits
//       })
//    }
// }
