import React, {Component} from "react";
import "./general.style.scss";
import Container from "./children/container";
import {Link} from "react-router-dom";

import Info from "./children/info";

import art from "../../../assets/pictures/art.jpg";

import boxes from "../../../assets/pictures/boxes.png";

import visualArt from "../../../assets/pictures/visual_art.JPG";

import paintings from "../../../assets/pictures/mixed_colors.jpg";

import wildhart__live from "../../../assets/pictures/wildhart__live.jpg";

import workShopPic from "../../../assets/pictures/intervention.jpg";

class General extends Component {
    _isMounted = false;

    state = {
        title: [
            {id: 1, title: "EyesToEars", picture: art},
            {id: 2, title: "Freelance", picture: boxes},
            {id: 3, title: "Paintings", picture: paintings},
            {id: 4, title: "Visuals", picture: visualArt},
            {id: 5, title: "Wildhart", picture: wildhart__live},
            {id: 6, title: "WorkShops", picture: workShopPic}
        ],
        data: "http://linneajardemark.nu/wp-json/wp/v2/work",
        site: []
    };

    componentDidMount() {
        const {data} = this.state;
        this._isMounted = true;
        fetch(data)
            .then(res => res.json())
            .then(res => {
                this.setState({site: res});
            });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    renderTitle = project => {
        let {site} = this.state;
        const {match} = this.props;
        return (
            <Link
                className="links"
                key={project.id}
                to={`${match.path}/${project.title}`}
            >
                <Container
                    title={project.title}
                    picture={project.picture}
                    site={site}
                />
            </Link>
        );
    };

    render() {
        const {title} = this.state;
        return (
            <main className="general">
                <Info />
                <section className="general_wrapper">
                    {title.map(this.renderTitle)}
                </section>
            </main>
        );
    }
}

export default General;
