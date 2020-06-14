import React, { Component } from 'react';
import FetchSuperhero from '../../api/FetchSuperhero';

class SuperheroList extends Component {
    render() {
        return (
            <div className='superherolist'>
                <FetchSuperhero />
            </div>
        )
    }
}

export default SuperheroList;