import React, { Component } from 'react';

class Details extends Component {
    render() {
        // console.log(this.props.location.aboutProps);
        const data = (this.props.location.aboutProps || []);
        console.log(Object.keys(data.biography || []).map(item => data.biography[item]))

        if (data.length === 0) {
            return (
                <div style={{textAlign: 'center'}}>
                    <h3>Please search for a superhero to see it's details</h3>
                    <p>You can click on the 'home' button above.</p>
                </div>
            )
        }
        else {
            return (
                <div className='details'>
                    <h1>Details</h1>
                    <h2>{data.name}</h2>
                    {/* <ul>
                        {Object.keys(data.biography || []).map((item, id) => (
                            <li key={id}>{data.biography[item]}</li>
                        ))}
                    </ul> */}
                    
                </div>
            )
        }
    }
}

export default Details;