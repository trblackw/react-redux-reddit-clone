import React from "react";
import { generateHTML } from "../utils/helpers";
import styled from "styled-components";

export default ({ posts }) => {
   console.log(posts.map(post => post.id));
  return <PostGrid>{generateHTML(posts)}</PostGrid>;
};

const PostGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, .5fr);
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
    color: whitesmoke;
    &:hover {
      color: red;
    }
  }
`;
