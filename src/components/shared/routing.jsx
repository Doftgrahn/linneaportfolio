import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import LandingPageComponent from '../landingPage/landingPage.component';
import WorkComponent from '../work/work.component';
import EventComponent from '../event/event.component';
import AboutComponent from '../about/aboutComponent';

class ContainerRouting extends Component {
  render() {

    return (<div>
      <Switch>
        <Route exact path="/" component={LandingPageComponent}/>
        <Route path="/home" component={LandingPageComponent}/>
        <Route path="/work" component={WorkComponent}/>
        <Route path="/event" component={EventComponent}/>
        <Route path="/about" component={AboutComponent}/>
      </Switch>
    </div>)
  }
}

export default ContainerRouting;
