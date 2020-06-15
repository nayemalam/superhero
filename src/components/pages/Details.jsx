import React, { Component } from 'react';
import HeroCard from '../herocard/HeroCard';

class Details extends Component {
    render() {
        // console.log(this.props.location.aboutProps);
        const data = (this.props.location.aboutProps || []);
        // console.log(Object.keys(data.biography || []).map(item => data.biography[item]))
        if (data.length === 0) {
            return (
                <div style={{textAlign: 'center'}}>
                    <h3>Please search/select a superhero to see it's details</h3>
                    <p>You can click on the 'home' button above.</p>
                </div>
            )
        }
        else {
            return (
                <div className='details'>
                    <h1>Selected details</h1>
                    <p>If you'd like to go back to your selection, please click on the 'home' button above.</p>
                    <HeroCard 
                        data={data}
                    />                    
                </div>
            )
        }
    }
}

export default Details;