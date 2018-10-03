import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchSinglePost } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Post extends Component {
  componentDidMount() {
    const { fetchSinglePost } = this.props;
    //  fetchSinglePost(this.props.match.id);
    fetchSinglePost(this.props.match.id);
  }
  render() {
    console.log(this.props);
    return <div />;
  }
}

const mapStateToProps = state => ({
  posts: state.post
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchSinglePost }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
