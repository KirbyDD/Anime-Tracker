import React, { Component } from 'react';
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
        <button className="tab">Home</button>
        <button className="tab">Forum</button>
        <button className="tab">About</button>
      </nav>
    )
  }
}

export default Navbar;