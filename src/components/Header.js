import React, { Fragment } from "react";
import logo from "../img/reddit-logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Nav = () => (
  <Fragment>
    <NavUl>
      <li>
        <NavLink exact to="/" activeStyle={{ color: "red" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/discover" activeStyle={{ color: "red" }}>
          Discover
        </NavLink>
      </li>
      <li>
        <Search />
      </li>
    </NavUl>
  </Fragment>
);

export default () => {
  return (
    <div>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
      </Header>
    </div>
  );
};

const Header = styled.header`
  background-color: hsl(0, 0%, 31%);
  height: auto;
  padding: 20px;
  color: white;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const NavUl = styled.ul`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1em;
  list-style: none;
  li {
    margin-right: 0.6em;
  }
  li a {
    text-decoration: none;
    color: black;
  }
`;
