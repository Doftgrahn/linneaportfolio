import React, {useState} from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";

const Navbar = ({stateFalse, toggle}) => {
    const [link] = useState([
        {name: "Home", to: "/Home"},
        {name: "Work", to: "/Work"},
        {name: "Event", to: "/Event"},
        {name: "About", to: "/About"}
    ]);

    const links = link.map((links, index) => (
        <li key={index}>
            <Link className="routerLinks" to={links.to} onClick={stateFalse}>
                {links.name}
            </Link>
        </li>
    ));

    return (
        <nav className={"navBar " + (toggle ? "h_active" : "")}>
            <ul>{links}</ul>
        </nav>
    );
};

export default Navbar;
