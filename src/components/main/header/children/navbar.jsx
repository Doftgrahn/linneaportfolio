import React, {Component} from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";


class Navbar extends Component {

  render() {
    let { stateFalse, toggle} = this.props;

    return ( <nav className={"navBar " + (toggle? 'h_active': '')}>
      <ul>
        <li>
          <Link className="routerLinks" to="/home" onClick={()=> stateFalse() }>Home</Link>
        </li>
        <li>
          <Link className="routerLinks" to="/work" onClick={()=> stateFalse() }>Work</Link>
        </li>
        <li>
          <Link className="routerLinks" to="/event" onClick={()=> stateFalse() }>Event</Link>
        </li>
        <li>
          <Link className="routerLinks" to="/about" onClick={()=> stateFalse() }>About</Link>
        </li>
      </ul>
    </nav>)
  }
}


export default Navbar;
