import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home'
    }
  }

  render() {
    return (
      <nav className="navbar">
        <NavLink to='/' className="tab" exact activeClassName="selected">Home</NavLink>
        <NavLink to='/forums' className="tab" exact activeClassName="selected">Forums</NavLink>
        <NavLink to='/about' className="tab" exact activeClassName="selected">About</NavLink>
      </nav>
    )
  }
}

export default Navbar;