import React, {Component} from "react";

import "./Work.scss";

import NavBarWork from "./navbarChildren/navBarWork";
import RoutingChildren from "../shared/routing-children";

class WorkComponent extends Component {
    state = {
        title: [
            {id: 1, title: "EyesToEars"},
            {id: 2, title: "Freelance"},
            {id: 3, title: "Paintings"},
            {id: 4, title: "Visuals"},
            {id: 5, title: "Wildhart"},
            {id: 6, title: "WorkShops"}
        ]
    };

    render() {
        const {title} = this.state;
        const {match} = this.props;
        return (
            <main className="work">
                <NavBarWork title={title} match={match} className="navbar" />
                <RoutingChildren title={title} match={match} />
            </main>
        );
    }
}

export default WorkComponent;
