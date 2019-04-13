import React, {Component} from 'react';

import {BrowserRouter as Router} from "react-router-dom";

import './Work.scss';
import NavBarWork from './children/navbarChildren/navBarWork';
import RoutingChildren from '../shared/routing-children';

class WorkComponent extends Component {
  render() {

    return (<main className="work">
      <Router>
        <NavBarWork className="navbar"/>
        <RoutingChildren/>
      </Router>
    </main>)
  }
}

export default WorkComponent;
