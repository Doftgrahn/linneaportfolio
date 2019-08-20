import React, {Component} from 'react';

import {Link} from "react-router-dom";

class NavBarWork extends Component {

    render() {
        const {match, title} = this.props;
        const links = title.map((li, index) => <li key={index}>
            <Link className="routerLinks" to={`${match.path}/${li.title}`}>{li.title}</Link>
        </li>);
        return (<nav className="navBar-children">
            <ul>{links}</ul>
        </nav>)
    }
}

export default NavBarWork;
