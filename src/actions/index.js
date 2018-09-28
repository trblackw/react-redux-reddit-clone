export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
   return async dispatch => {
      const res = await fetch('https://www.reddit.com/r/all/new.json?limit=25');
      const posts = await res.json();
      console.log(posts);

      return dispatch({
         type: 'FETCH_POSTS',
         data: posts.data.children
      })
      }
   }