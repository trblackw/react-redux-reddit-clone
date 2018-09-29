import React from "react";
import logo from "../img/reddit-logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Nav = () => (
  <NavUl>
    <li>
      <NavLink to="/" activeStyle={{ color: "red" }}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="#">Discover</NavLink>
    </li>
    <li>
      <NavLink to="#">other stuff</NavLink>
    </li>
    <li>
      <Search />
    </li>
  </NavUl>
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
  background-color: #eee;
  height: auto;
  padding: 20px;
  color: white;
  border-bottom: 1px solid black;
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
