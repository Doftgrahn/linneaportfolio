import React, {Component} from 'react';
import './Header.scss';
import Hamburger from './hamburger';

import {Link} from "react-router-dom";

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

  render() {
    let {toggle} = this.state;
    return (<header>
      <nav className={"navBar " + (toggle? 'h_active': '')}>
        <ul>
          <li>
            <Link className="routerLinks" to="/home" onClick={this.stateFalse}>Home</Link>
          </li>
          <li>
            <Link className="routerLinks" to="/work" onClick={this.stateFalse}>Work</Link>
          </li>
          <li>
            <Link className="routerLinks" to="/event" onClick={this.stateFalse}>Event</Link>
          </li>
          <li>
            <Link className="routerLinks" to="/about" onClick={this.stateFalse}>About</Link>
          </li>
        </ul>
      </nav>

      <Hamburger toggle={toggle} toggleHamburger={this.toggleHamburger}/>

    </header>);
  }
}

export default HeaderComponent;
