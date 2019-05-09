import React from "react";
import "./Hamburger.scss";

const Hamburger = ({toggleHamburger, toggle}) => {
    return (
        <div
            className={"hamburger " + (toggle ? "active" : "")}
            onClick={toggleHamburger}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default Hamburger;
