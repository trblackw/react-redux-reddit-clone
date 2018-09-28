export const FETCH_POSTS = "FETCH_POSTS";

export function fetchPosts() {
  return async dispatch => {
    const res = await fetch("https://www.reddit.com/r/all/new.json?limit=25");
    const posts = await res.json();
    const image = posts.data.children.map(post => post.data).map(post => {
      //if there's an image for the post
      if (post.preview) {
        return {
          url: post.preview.images[0].resolutions[1].url,
          height: post.preview.images[0].resolutions[1].height,
          width: post.preview.images[0].resolutions[1].width
        };
      } else {
         return null;
      }
    });
     console.log('FILTERED', image.filter(img => img !== null));

    return dispatch({
      type: "FETCH_POSTS",
      posts: posts.data.children,
      image: image.filter(img => img !== null)
      // image: {
      //   url: image.url,
      //   height: image.height,
      //   width: image.width
      // }
    });
  };
}
