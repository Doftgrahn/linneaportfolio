import React, {Component} from "react";

import Event from "./children/event";

import {url} from "../../api/wordpress";

//const dataURL = "http://linneajardemark.nu/wp-json/wp/v2/event/";

class Events extends Component {
    _isMounted = false;

    state = {
        site: []
    };

    componentDidMount() {
        this._isMounted = true;

        fetch(`${url}/event/`)
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

    renderEvent = event => {
        return (
            <div className="event_event" key={event.id}>
                <Event
                    title={event.title.rendered}
                    content={event.content.rendered}
                    createMarkup={this.createMarkup}
                />
            </div>
        );
    };

    render() {
        const {site} = this.state;
        return (
            <main className="event">
                <h1>Upcoming Events</h1>
                <section>{site.map(this.renderEvent)}</section>
            </main>
        );
    }
}

export default Events;
