import React, {Component} from "react";
import AboutMe from "./children/about_me";

const dataURL = "http://linneajardemark.nu/wp-json/wp/v2/about_me/";

class About extends Component {
    _isMounted = false;

    state = {
        site: []
    };

    componentDidMount() {
        this._isMounted = true;
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                if (this._isMounted) {
                    this.setState({site: res});
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    createMarkup = html => {
        return {__html: html};
    };

    renderAbout = about => {
        return (
            <div className="about_container" key={about.id}>
                <AboutMe
                    title={about.title.rendered}
                    content={about.content.rendered}
                    createMarkup={this.createMarkup}
                />
            </div>
        );
    };

    render() {
        let {site} = this.state;
        return (
            <main className="about">
                <h1>About me!</h1>
                <div className="about_wrapper">
                    {site.map(this.renderAbout)}
                </div>
            </main>
        );
    }
}

export default About;
