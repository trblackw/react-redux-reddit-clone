import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { fetchSubreddit } from "../actions/index";

class Search extends Component {
  handleSearch = () => {
    const { fetchSubreddit } = this.props;


    fetchSubreddit(this.search.value)
  };
  render() {
    return (
      <div>
        <label
          htmlFor="sub-search"
          style={{ fontSize: "xx-small", color: "black" }}
        >
          Search for a subreddit
        </label>
        <input
          ref={input => (this.search = input)}
          type="text"
          name="sub-search"
        />
        <button onClick={this.handleSearch}>go!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  search: state.search
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSubreddit }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
