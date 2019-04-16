import React, {Component} from 'react';

import EyesToEars from './children/eyesToEars/eyesToEars';
import Freelance from './children/freelance/freelance';
import Paintings from './children/paintings/paintings';
import Visuals from './children/visuals/visuals';
import Wildhart from './children/wildhart/wildhart';
import Workshop from './children/workshop/workshop';

class All extends Component {
    render() {
        const {match} = this.props;
        let id = match.params.id;
return (<main>
    {(id === 'EyesToEars') ? <EyesToEars/>:
    (id ==='Freelance') ? <Freelance/>:
    (id === 'Paintings') ? <Paintings/>:
    (id === 'Visuals') ? <Visuals/>:
    (id === 'Wildhart') ? <Wildhart/>
    : <Workshop/>
        }</main>)
    }
}

export default All;
