import React, {Component} from 'react';

//import {HashRouter as Router} from "react-router-dom";

import './Work.scss';
import NavBarWork from './navbarChildren/navBarWork';
import RoutingChildren from './routing-children';

class WorkComponent extends Component {

    toggleGeneral = () => {
        let {general} = this.state
        this.setState({
            general: !general
        })
    }

    ShowRoutingChildren = () => {
        this.setState({general: false})
    }

    render() {
        let {match} = this.props;
        return (<main className="work">
            <NavBarWork match={match} className="navbar"/>
            <RoutingChildren match={match}/>
        </main>)
    }
}

export default WorkComponent;
