import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import EyesToEars from '../work/children/eyesToEars/eyesToEars';
import Freelance from '../work/children/freelance/freelance';
import Paintings from '../work/children/paintings/paintings';
import Visuals from '../work/children/visuals/visuals';
import Wildhart from '../work/children/wildhart/wildhart';
import Workshop from '../work/children/workshop/workshop';

import General from '../work/children/general/general';

class RoutingChildren extends Component {
  render() {
    return (<Switch>
      <Route path="/work: general" component={General}/>
      <Route path="/work: eyesToEars" component={EyesToEars}/>
      <Route path="/work: freelance" component={Freelance}/>
      <Route path="/work: paintings" component={Paintings}/>
      <Route path="/work: visuals" component={Visuals}/>
      <Route path="/work: wildhart" component={Wildhart}/>
      <Route path="/work: workshop" component={Workshop}/>
    </Switch>)
  }
}
export default RoutingChildren;
