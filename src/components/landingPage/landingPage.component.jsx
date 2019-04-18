import React, {Component} from 'react';
import './LandingPage.scss'
import {Link} from "react-router-dom";

import upperLinnea from '../shared/pictures/LinneaTop.png';

class LandingPageComponent extends Component {

    toWork = () => <Link className="title" to="/work">
        Click here to check out my stuff!</Link>;

    render() {
        return (<main className="landingPage">
            <div className="bottom_picture">
                <img className="top_picture" src={upperLinnea} alt="UpperLinea"/>
            </div>
        </main>)
    }
}

export default LandingPageComponent;

/*   <h1>I'm Linnea, i'm an artist based in Göteborg, Sweden.</h1>
    {this.toWork()}*/
