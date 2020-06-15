import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import HeroCard from '../herocard/HeroCard';

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
                    <Grid container spacing={4}>
                        {(this.props.team || [])
                            .map((item,id) => (
                                <Grid key={id} item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <HeroCard name={item.name} img={item.image.url}/>
                                </Grid>
                        ))}
                    </Grid>
                </div>
            )
        }
    }
}

export default Team;