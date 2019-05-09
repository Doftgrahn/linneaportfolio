import React, {Component} from "react";
import "./LandingPage.scss";
import Hero from "./children/hero";
//import {Link} from "react-router-dom";

class LandingPageComponent extends Component {
    render() {
        return (
            <main className="landingPage">
                <Hero />
                <section>


                </section>
            </main>
        );
    }
}

export default LandingPageComponent;

/*

toWork = () => (
    <Link className="title" to="/work">
        Click here to check out my stuff!
    </Link>
);


*/
