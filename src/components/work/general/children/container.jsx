import React, {Component} from 'react';

class Container extends Component {

    render() {
        const {title} = this.props;
        return (<div className="general_container">
            <div>
                <h3>{title}</h3>
            </div>
        </div>)
    }
}
export default Container;
