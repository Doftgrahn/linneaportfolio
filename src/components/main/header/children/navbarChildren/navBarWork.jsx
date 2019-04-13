import React, {Component} from 'react';
import './NavBar.scss';

import {Link} from "react-router-dom";

let link = [
  {
    name: 'EyesToEars',
    className: 'routerLinks',
    to: '/work: eyesToEars'
  }, {
    name: 'Freelance',
    className: 'routerLinks',
    to: '/work: freelance'
  }, {
    name: 'Paintings',
    className: 'routerLinks',
    to: '/work: paintings'
  }, {
    name: 'Visuals',
    className: 'routerLinks',
    to: '/work: visuals'
  }, {
    name: 'Wildhart',
    className: 'routerLinks',
    to: '/work: wildhart'
  }, {
    name: 'WorkShop',
    className: 'routerLinks',
    to: '/work: workshop'
  }
];

class NavBarWork extends Component {
  render() {
    const links = link.map((links, index) => <li key={index}>
      <Link className={links.className} to={links.to}>{links.name}
      </Link>
    </li>);
    return ((<nav className="navBar-children">
      <ul>{links}</ul>
    </nav>))
  }
}

export default NavBarWork;
