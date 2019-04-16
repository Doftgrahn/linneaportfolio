import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './Header.scss';
import Hamburger from './children/hamburger';
import Navbar from './children/navbar';

class HeaderComponent extends Component {

  state = {
    toggle: false
  }

  toggleHamburger = () => {
    let {toggle} = this.state;
    this.setState({
      toggle: !toggle
    })
  }

  stateFalse = () => {
    this.setState({toggle: false})
  }

  title = () => <Link className="title" to="/home" onClick={this.stateFalse}>Linnea Jardemark</Link>;

  render() {
    let {toggle} = this.state;
    return (<header>
      <h1>{this.title()}</h1>
      <Navbar toggle={toggle} stateFalse={this.stateFalse}/>
      <Hamburger toggle={toggle} toggleHamburger={this.toggleHamburger}/>
    </header>);
  }
}

export default HeaderComponent;
