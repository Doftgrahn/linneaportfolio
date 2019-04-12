import React, {Component} from 'react';
import './Header.scss';

import {Link} from "react-router-dom";

class HeaderComponent extends Component {

  render() {
    return (<header>
      <h1>Linnea Jardemark</h1>
      <ul>
        <li>
          <Link className="routerLinks" to="/home">Home</Link>
        </li>
        <li>
          <Link className="routerLinks" to="/work">Work</Link>
        </li>
        <li>
          <Link className="routerLinks" to="/event">Event</Link>
        </li>
        <li>
          <Link className="routerLinks" to="/about">About</Link>
        </li>

      </ul>

    </header>);
  }
}

export default HeaderComponent;
