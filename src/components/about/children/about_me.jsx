import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        let {title, content, createMarkup} = this.props;

        return (<section>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={createMarkup(content)}/>
        </section>)
    }
}

export default AboutMe;
