import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
class HomePage extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  componentDidMount() {
    const { fetchPosts } = this.props;
    //implement loading ui
    fetchPosts();
  }

  render() {
     const { posts, images } = this.props;
     console.log('homepage', images)
    return (
      <PostGrid>
        {posts.map(post => post.data).map(post => (
          <div key={post.id}>
            <h3>
              <Link to={post.url} target="_blank">{post.title}</Link>
            </h3>
            <ul className="post-details">
              <li>
                /u/
                {post.author}
              </li>
              <li>
                /r/
                {post.subreddit}
              </li>
            </ul>
            <div>
              {images ? (
                images.map(image => (
                  <img
                    src={image.url}
                    height={image.height}
                    width={image.width}
                  />
                ))
              ) : (
                <small>No image available</small>
              )}
                   
            </div>
          </div>
        ))}
      </PostGrid>
    );
  }
}

const mapStateToProps = state => ({
   posts: state.posts.posts,
   images: state.image
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  padding: 2em;
  margin: 0 auto;
  overflow-x: scroll;

  .post-details {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .post-details > * {
    display: inline-block;
    color: red;
    font-size: small;
    margin-right: 1em;
  }

  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: red;
    }
  }
`;
