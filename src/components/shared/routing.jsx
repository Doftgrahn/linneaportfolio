import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import LandingPageComponent from '../landingPage/landingPage.component';
import WorkComponent from '../work/work.component';
import EventComponent from '../event/event.component';
import AboutComponent from '../about/about.component';

class ContainerRouting extends Component {

    render() {
        return (<Switch>
            <Route exact={true} path="/" component={LandingPageComponent}/>
            <Route path="/Home" component={LandingPageComponent}/>
            <Route path="/Work" render={(props) => <WorkComponent {...props} count={this.props}/>}/>
            <Route path="/Event" component={EventComponent}/>
            <Route path="/About" component={AboutComponent}/>
            <Route path="*" component={LandingPageComponent}/>
        </Switch>)

    }
}

export default ContainerRouting;
