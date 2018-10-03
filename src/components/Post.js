import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchSinglePost } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Post extends Component {
  componentDidMount() {
     const { fetchSinglePost, match } = this.props;
     console.log(this.props)
    //  fetchSinglePost(this.props.match.id);
   //  fetchSinglePost(this.props.match.id);

   //   fetch(`http://redd.it${match.url}`).then(res => console.log(res))
  }
  render() {
    console.log(this.props);
     return <div>
       POST
    </div>
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
