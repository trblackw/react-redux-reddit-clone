import React from "react";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div>post info</div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
