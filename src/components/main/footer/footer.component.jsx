import React from "react";
import "./Footer.scss";
import instagram from "../../shared/pictures/instagram.svg";
import facebook from "../../shared/pictures/facebook.svg";

const FooterComponent = () => {
    return (
        <footer>
            <div className="info">
                <span>Phone: +4673498989</span>
                <span>Email: Lorem@gmail.com</span>
            </div>

            <div className="social-media">
                <img
                    className="social-media__icon"
                    src={facebook}
                    alt="Facebook"
                />
                <img
                    className="social-media__icon"
                    src={instagram}
                    alt="Instagram"
                />
            </div>
        </footer>
    );
};


export default FooterComponent;
