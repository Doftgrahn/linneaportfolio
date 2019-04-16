import React, {Component} from 'react';
import './Hamburger.scss';

class Hamburger extends Component {

  render() {
    let {toggleHamburger, toggle} = this.props;
    return (
      <div className={"hamburger " + (toggle ? 'active': '')} onClick={() => toggleHamburger()}>
      <span></span>
      <span></span>
      <span></span>
    </div>)
  }
}


export default Hamburger;
