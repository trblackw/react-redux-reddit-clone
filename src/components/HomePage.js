import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
class HomePage extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  componentDidMount() {
     const { fetchPosts, pageLoaded } = this.props;
     //implement loading ui
      fetchPosts();

  }

   render() {
     const {posts, pageLoaded} = this.props
      // if (pageLoaded) return <h1 style={{ margin: '0 auto' }}>LOADING...</h1>
      return (
         <div>hey</div>
      )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
