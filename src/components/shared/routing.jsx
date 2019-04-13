import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import LandingPageComponent from '../landingPage/landingPage.component';
import WorkComponent from '../work/work.component';
import EventComponent from '../event/event.component';
import AboutComponent from '../about/aboutComponent';


/*Children to WorkComponent*/

class ContainerRouting extends Component {

  render() {
    return (<main>
      <Switch>
        <Route exact path="/" component={LandingPageComponent}/>
        <Route path="/home" component={LandingPageComponent}/>
        <Route path="/work" component={WorkComponent}/>
        <Route path="/event" component={EventComponent}/>
        <Route path="/about" component={AboutComponent}/>
      </Switch>
    </main>)
  }
}

export default ContainerRouting;
