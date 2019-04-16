import React, {Component} from 'react';
import './NavBar.scss';

import {Link} from "react-router-dom";

class NavBarWork extends Component {
    link = [
        {
            name: 'EyesToEars',
            to: 'EyesToEars'
        }, {
            name: 'Freelance',
            to: 'Freelance'
        }, {
            name: 'Paintings',
            to: 'Paintings'
        }, {
            name: 'Visuals',
            to: 'Visuals'
        }, {
            name: 'Wildhart',
            to: 'Wildhart'
        }, {
            name: 'WorkShop',
            to: 'Workshop'
        }
    ];

    render() {
        const {match} = this.props;
        const links = this.link.map((li, index) => <li key={index}>
            <Link className="routerLinks" to={`${match.path}/${li.to}`}>{li.name}</Link>
        </li>);
        return ((<nav className="navBar-children">
            <ul>{links}</ul>
        </nav>))
    }
}

export default NavBarWork;
