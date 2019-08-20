import React from "react";
import "./App.scss";

import {BrowserRouter as Router} from "react-router-dom";
import HeaderComponent from "./components/main/header/header.component";
import FooterComponent from "./components/main/footer/footer.component";
import ContainerRouting from "./components/shared/routing";

const App = props => {
    return (
        <div className="App">
            <Router>
                <>
                    <HeaderComponent />
                    <ContainerRouting />
                    <FooterComponent />
                </>
            </Router>
        </div>
    );
};

export default App;
