import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { fetchSubreddit } from "../actions/index";

class Search extends Component {
  handleSearch = () => {
    //no validation yet
    const { fetchSubreddit } = this.props;
    fetchSubreddit(this.search.value);
    this.search.value = "";
  };

  render() {
    return (
      <SearchForm onSubmit={e => e.preventDefault()}>
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
      </SearchForm>
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

const SearchForm = styled.form`
  box-sizing: border-box;
  display: inline;
  margin: 0;
  padding: 0;

  input {
    padding: 0.5em;
    border-radius: 5px;
    display: inline;
  }
  button {
     float: right;
  }
`;
