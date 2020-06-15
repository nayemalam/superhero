import React, { Component } from 'react';
import { sumItems, avgItems } from '../helpers';

class TeamStats extends Component {
    render() {
        return (
            <div className='team-stats'>
                <div className='team-avg container'>
                    <h3>Average power stats of team: </h3>
                    <h4>Intelligence: <span>{avgItems(this.props.team, 'intelligence')}</span></h4>
                    <h4>Strength: <span>{avgItems(this.props.team, 'strength')}</span></h4>
                    <h4>Speed: <span>{avgItems(this.props.team, 'speed')}</span></h4>
                    <h4>Durability: <span>{avgItems(this.props.team, 'durability')}</span></h4>
                    <h4>Power: <span>{avgItems(this.props.team, 'power')}</span></h4>
                    <h4>Combat: <span>{avgItems(this.props.team, 'combat')}</span></h4>
                </div>
                <div className='team-total container'>
                    <h3>Total power stats of team: </h3>
                    <h4>Intelligence: <span>{sumItems(this.props.team, 'intelligence')}</span></h4>
                    <h4>Strength: <span>{sumItems(this.props.team, 'strength')}</span></h4>
                    <h4>Speed: <span>{sumItems(this.props.team, 'speed')}</span></h4>
                    <h4>Durability: <span>{sumItems(this.props.team, 'durability')}</span></h4>
                    <h4>Power: <span>{sumItems(this.props.team, 'power')}</span></h4>
                    <h4>Combat: <span>{sumItems(this.props.team, 'combat')}</span></h4>
                </div>
            </div>
        )
    }
}

export default TeamStats;