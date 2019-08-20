import React from "react";
import instagram from "../../../assets/pictures/instagram.svg";
import facebook from "../../../assets/pictures/facebook.svg";

const FooterComponent = () => {
    return (
        <footer>
            <div className="info">
                <h2>
                    Linnea <br /> Jardemark
                </h2>
                <div>
                    <span>Phone: +4673498989</span>
                    <span>Email: Lorem@gmail.com</span>
                </div>
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
