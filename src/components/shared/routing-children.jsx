import React from "react";
import {Route, Switch} from "react-router-dom";

import General from "../work/general/general";
import All from "../work/all";

import "../work/children/Children.scss";

const RoutingChildren = ({match}) => {
    return (
        <Switch>
            <Route match={match} path={`${match.path}/:id`} component={All} />
            <Route
                exact={true}
                match={match}
                path={match.path}
                component={General}
            />
        </Switch>
    );
};

export default RoutingChildren;
