import React from "react";
import styled from "styled-components";
import { TiArrowUpOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export const dateFormatter = timeStamp => {
  const date = new Date(timeStamp * 1000).toLocaleDateString().split("/");
  const time = new Date(timeStamp * 1000).toLocaleTimeString().split(":");
  return `${date[0]}/${date[1]} ${time[0]}:${time[1]}pm`;
};

export const generateHTML = data => {
  return data.map(post => {
    const {
      title,
      permalink,
      thumbnail,
      thumbnail_height,
      thumbnail_width,
      author,
      subreddit,
      created_utc,
      id,
      ups,
      num_comments
    } = post;
    return (
       <PostContainer key={id}>
          <div id="innerContainer">
            <h3>
              <a href={`https://reddit.com${permalink}`} target="_blank">
                <strong>{title}</strong>
              </a>
            </h3>
            <StyledUl>
              <li>
                <small id="sub">{`/r/${subreddit}`}</small>
              </li>
              <li>
                <small id="username">{`/u/${author}`}</small>
              </li>
              <li>
                <small>
                  <span id="arrow">
                    <TiArrowUpOutline />
                  </span>
                  {ups}
                </small>
              </li>
            </StyledUl>
            <span className="time">{dateFormatter(created_utc)}</span>
            <div
              style={{
                justifyContent: "center",
                margin: "0.8em auto",
                padding: 0
              }}
            >
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={`${title}'s thumbnail`}
                  height={thumbnail_height}
                  width={thumbnail_width}
                  style={{ border: "2px solid red" }}
                />
              ) : null}
            </div>
          </div>
      </PostContainer>
    );
  });
};

const PostContainer = styled.div`
  padding: 0 1em;
  border: 1px solid whitesmoke;
  background: black;
  div#innerContainer {
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }
  small#username {
    color: lightblue;
  }
  small#sub {
    color: lightgreen;
    font-size: 1.2em;
  }
  span#arrow {
    font-size: 1em;
    color: red;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  li {
    margin-right: 1em;
  }
`;
