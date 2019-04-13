import React, {Component} from 'react';
import './LandingPage.scss'
import {Link} from "react-router-dom";

class LandingPageComponent extends Component {
  heroImg = '../../../public/assets/pictures/linnea.jpg';

  toWork = () => <Link className="title" to="/work">
    Click here to check out my stuff!
  </Link>;

  render() {
    return (<main className="landingPage">
      <h1>I'm Linnea, i'm an artist based in Göteborg, Sweden.</h1>
      {this.toWork()}
    </main>)
  }
}

export default LandingPageComponent;
