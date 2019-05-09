import React, {Component} from "react";
import "./LandingPage.scss";
import {Link} from "react-router-dom";

import upperLinnea from "../../assets/pictures/LinneaTop.png";

import bottomLinnea from "../../assets/pictures/LinneaBottom.jpg";

class LandingPageComponent extends Component {
    toWork = () => (
        <Link className="title" to="/work">
            Click here to check out my stuff!
        </Link>
    );
    
    render() {
        return (
            <main className="landingPage">
                <div className="picture_wrapper">
                    <div className="picture_wrapper-info">
                        <h1>
                            I'm Linnea, i'm an artist based in Göteborg, Sweden.
                        </h1>
                        <h3>{this.toWork()}</h3>
                    </div>
                    <img
                        className="top_picture"
                        src={upperLinnea}
                        alt="Upper"
                    />
                    <img
                        className="bottom_picture"
                        src={bottomLinnea}
                        alt="Bottom"
                    />
                </div>
            </main>
        );
    }
}

export default LandingPageComponent;
