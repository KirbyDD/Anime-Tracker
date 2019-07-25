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
        <NavLink to='/watchlist' className="tab" exact activeClassName="selected">Your Watchlist</NavLink>
        <NavLink to='/about' className="tab" exact activeClassName="selected">Anime Dictionary</NavLink>
      </nav>
    )
  }
}

export default Navbar;