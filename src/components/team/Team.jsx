import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Team extends Component {
    render() {

        function sumItems(array, key) {
            return (array || []).map(item => parseInt(item.powerstats[key]))
            .reduce(((a,b) => (a || 0) + (b || 0)), 0)
        }
        function avgItems(array, key) {
            const value =  (array || []).map(item => parseInt(item.powerstats[key]))
            .reduce(((a,b) => (a || 0) + (b || 0)), 0) / array.length

            const fixedDecValue = Math.round(value * 100)/100
            return fixedDecValue
        }
        // console.log(sumItems(this.props.team, 'intelligence'))
        // console.log((this.props.team || []).map(item => parseInt(item.id)).reduce(((a,b) => a + b),0))

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
                    <h1>Your Team</h1>
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
                    <div className='members'>
                    <h1>Members ({this.props.team.length})</h1>
                        <p>Click on your members to see their details.</p>
                        <ul>
                            {(this.props.team || [])
                                .map((item,id) => (
                                    <li key={id}>
                                        <Link 
                                            to={{
                                                pathname: '/details',
                                                aboutProps: item
                                            }} 
                                            style={{color: 'black'}}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                </div>
            )
        }
    }
}

export default Team;