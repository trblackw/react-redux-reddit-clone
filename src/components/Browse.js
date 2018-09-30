import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchAllSubreddits } from "../actions/index";
import styled from "styled-components";

export default class Browse extends Component {
  state = {
    subreddits: []
  };
  async componentDidMount() {
    const res = await fetch(
      "https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits.json?limit=100"
    );
    const wikiPage = await res.json();
    const subreddits = [
      ...new Set(wikiPage.data.content_html.match(/\/r\/\w+/gi)).keys()
    ];
    this.setState({
      subreddits: subreddits.slice(0, 500)
    });
  }
  render() {
    return (
      <div>
        <button>Apply filters</button>
        <StyledUl>
          {this.state.subreddits.map(sub => (
            <div key={sub}>
              <li>
                <a href={`https://www.reddit.com${sub}`} target="_blank">
                  {sub}
                </a>
              </li>
            </div>
          ))}
        </StyledUl>
      </div>
    );
  }
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 1em auto;
  
  div {
    margin: 1em;
    padding: 0.5em;
    border: 1px dotted red;
    &:hover {
      background: red;
      border: 1px solid red;
      font-color: white;
      cursor: pointer;
    }
  }

`;

// const mapStateToProps = state => ({
//   subreddits: state.subreddits
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ fetchAllSubreddits }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Browse);
