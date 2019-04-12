import React, {Component} from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";


import HeaderComponent from './components/main/header/headerComponent';
import ContainerRouting from './components/shared/routing';

 import FooterComponent from './components/main/footer/footer.component';

class App extends Component {
  render() {
    return (<main>
      <Router>
      <HeaderComponent/>
      <ContainerRouting/>
      <FooterComponent/>
      </Router>
    </main>);
  }
}

export default App;
