import React, {Component} from 'react';
import './App.scss';

import {BrowserRouter as Router} from "react-router-dom";
import HeaderComponent from './components/main/header/header.component';
import FooterComponent from './components/main/footer/footer.component';
import ContainerRouting from './components/shared/routing';

class App extends Component {
    render() {
        return (<Router>
            <HeaderComponent/>
            <ContainerRouting/>
            <FooterComponent/>
        </Router>);
    }
}

export default App;
