import React, {Component} from "react";
import "./App.scss";

import {BrowserRouter as Router} from "react-router-dom";
import HeaderComponent from "./components/main/header/header.component";
import FooterComponent from "./components/main/footer/footer.component";
import ContainerRouting from "./components/shared/routing";

class App extends Component {
    state = {
        count: 0,
        statezzz: false
    };

    render() {
        let {count, statezzz} = this.state;
        return (
            <Router>
                <div>
                    <HeaderComponent />
                    <ContainerRouting count={count} state={statezzz} />
                    <FooterComponent />
                </div>
            </Router>
        );
    }
}

export default App;
