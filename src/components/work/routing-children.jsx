import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import General from './general/general';
import All from './all';

import './children/Children.scss';

class RoutingChildren extends Component {

    render() {
        const {match} = this.props;
        return (<Switch>
            <Route match={match} path={`${match.path}/:id`} component={All}/>
            <Route exact={true} match={match} path={match.path} component={General}/>
        </Switch>)
    }
}

export default RoutingChildren;
