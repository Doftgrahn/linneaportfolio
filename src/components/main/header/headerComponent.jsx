import React, {Component} from 'react';
import './Header.scss';
import Hamburger from './children/hamburger';
import Navbar from './children/navbar';

class HeaderComponent extends Component {
  name = "Linnea Jardemark";
  state = {
    toggle: false
  }

  toggleHamburger = () => {
    let {toggle} = this.state;
    this.setState({
      toggle: !toggle
    })
  }

  stateFalse = () => {
    this.setState({toggle: false})
  }

  render() {
    let {toggle} = this.state;
    return (<header>
      <h1>{this.name}</h1>
      <Navbar toggle={toggle} stateFalse={this.stateFalse}/>
      <Hamburger toggle={toggle} toggleHamburger={this.toggleHamburger}/>
    </header>);
  }
}

export default HeaderComponent;
