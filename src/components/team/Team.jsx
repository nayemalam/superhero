import React, { Component } from 'react'

class Team extends Component {
    render() {
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

export default Team;