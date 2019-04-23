import React, {Component} from 'react';

class Event extends Component {

    render() {
        let {title, content, createMarkup} = this.props;
        return (<div>
            <h3>{title}</h3>
            <div className="content" dangerouslySetInnerHTML={createMarkup(content)}/>
        </div>)
    }
}

export default Event;
