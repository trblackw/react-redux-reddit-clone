import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import styled from "styled-components";
import HomePosts from "./HomePosts";

class HomePage extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    //implement loading ui
    fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <HomeContainer>
        <HomePosts posts={posts} />
      </HomeContainer>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

const HomeContainer = styled.div`
   background: hsl(0, 0%, 15%);
   color: whitesmoke;

`