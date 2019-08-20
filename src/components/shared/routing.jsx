import React, {Component} from "react";

import {Switch, Route} from "react-router-dom";

import LandingPage from "../landingPage/LandingPage";
import Work from "../work/Work";
import Events from "../event/Event";
import About from "../about/About";

class ContainerRouting extends Component {
    state = {
        routing: [
            {exact: true, path: "/", component: LandingPage},
            {exact: false, path: "/Home", component: LandingPage},
            {exact: false, path: "/Work", component: Work},
            {exact: false, path: "/Event", component: Events},
            {exact: false, path: "/About", component: About},
            {exact: false, path: "*", component: LandingPage}
        ]
    };

    renderRouting = this.state.routing.map((e, i) => (
        <Route
            key={i}
            exact={e.exact}
            path={e.path}
            render={props => <e.component {...props} count={this.props} />}
        />
    ));

    render() {
        return <Switch>{this.renderRouting}</Switch>;
    }
}

export default ContainerRouting;
