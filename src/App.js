import React, {Component} from 'react';
import './App.scss';

import {BrowserRouter as Router} from "react-router-dom";
import HeaderComponent from './components/main/header/header.component';
import FooterComponent from './components/main/footer/footer.component';
import ContainerRouting from './components/shared/routing';

const dataURL = 'http://linneajardemark.nu/wp-json/wp/v2/landingpage/';

class App extends Component {

    state = {
        landingpage: 'landingpage',
        work: 'work',
        event: 'event',
        about: 'about',
        site: []
    };

    componentDidMount() {
        fetch(dataURL).then(res => res.json()).then(res => {
            this.setState({site: res})
        })
    }

    render() {
        return (<Router>
            <div>
                <HeaderComponent/>
                <ContainerRouting/>
                <FooterComponent/>
            </div>
        </Router>);
    }
}

export default App;
