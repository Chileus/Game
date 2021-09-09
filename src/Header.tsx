import React, { Component } from 'react';
import Title from './Title';
import NavBar from './NavBar';
import './Header.css';

class Header_bar extends Component{
  render() {
    return (
      <div className='header'>
        <Title />
        <NavBar />
      </div>
    );
  }
}

export default Header_bar;
