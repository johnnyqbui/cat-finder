import React, { Component } from 'react';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';

/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  render() {
    return (
      <div>
        <h1>Cat Finder</h1>
        <NavBar>
          <HeaderLink to="/">
            <h3>Home</h3>
          </HeaderLink>
          <HeaderLink to="/SearchByBreed">
            <h3>Search by breed</h3>
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;