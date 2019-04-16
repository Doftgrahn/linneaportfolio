import React, {Component} from 'react';
import './general.style.scss';
import Container from './children/container';
import {Link} from "react-router-dom";

class General extends Component {

    state = {
        title: [
            {
                id: 1,
                title: 'EyesToEars'
            }, {
                id: 2,
                title: 'FreeLance'
            }, {
                id: 3,
                title: 'Paintings'
            }, {
                id: 4,
                title: 'Visuals'
            }, {
                id: 5,
                title: 'Wildhart'
            }, {
                id: 6,
                title: 'WorkShops'
            }
        ]
    }

    renderTitle = (project) => {
        const {match} = this.props;
        return <Link key={project.id} className="routerLinks" to={`${match.path}/${project.title}`}><Container key={project.id} title={project.title}/></Link>
    }

    render() {
        return (<main className="general">
            <section className="general_wrapper">
                {this.state.title.map(this.renderTitle)}
            </section>

        </main>)
    }
}

export default General;
