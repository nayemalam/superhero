import React, { Component } from 'react';
import TeamStats from './TeamStats';
import TeamMembers from './TeamMembers';

class Team extends Component {
    render() {
        
        if(this.props.team.length === 0) {
            return (
                <div className='team'>
                    <hr />
                    <h1>Your Team</h1>
                    <p>The heros you add to your team will be displayed here.</p>
                </div>
            )
        } else {
            return (
                <div className='team'>
                    <hr />
                    <h1>Your Team</h1>
                    <TeamStats team={this.props.team} />
                    <TeamMembers team={this.props.team} />
                </div>
            )
        }
    }
}

export default Team;