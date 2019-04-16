import React, {Component} from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";

class Navbar extends Component {

  render() {
    let {stateFalse, toggle} = this.props;

    let link = [
      {
        name: 'Home',
        className: 'routerLinks',
        to: '/Home',
        event: () => stateFalse()
      }, {
        name: 'Work',
        className: 'routerLinks',
        to: '/Work',
        event: () => stateFalse()
      }, {
        name: 'Event',
        className: 'routerLinks',
        to: '/Event',
        event: () => stateFalse()
      }, {
        name: 'About',
        className: 'routerLinks',
        to: '/About',
        event: () => stateFalse()
      }
    ];

    const links = link.map((links, index) => <li key={index}>
      <Link className={links.className} to={links.to} onClick={links.event}>{links.name}
      </Link>
    </li>)

    return (<nav className={"navBar " + (
        toggle
        ? 'h_active'
        : '')}>
      <ul>{links}
      </ul>
    </nav>)
  }
}

export default Navbar;
