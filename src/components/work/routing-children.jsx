import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import General from './general/general';
import All from './all';

class RoutingChildren extends Component {
    render() {
        let {match} = this.props;
        return (<main>
            <Route match={match} path={`${match.path}/:id`} component= {All} />
            <Route exact={true} path={match.path} component={General}/>
        </main>)
    }
}

export default RoutingChildren;
