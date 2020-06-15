import React, { Component } from 'react';

class Team extends Component {
    render() {

        if(this.props.team.length === 0) {
            return (
                <div className='team'>
                    <h1>Your Team</h1>
                    <p>The heros you add to your team will be displayed here.</p>
                </div>
            )
        } else {
            return (
                <div className='team'>
                    <h1>Your Team</h1>
                    <ul style={{textAlign: 'center'}}>
                        {(this.props.team || [])
                            .map((item,id) => (
                                <li key={id}>{item.powerstats.combat}</li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Team;