import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import superhero from '../../images/superhero-img.jpg';
import { CardHeader } from '@material-ui/core';

class HeroCard extends Component {
    render() {
        return (
            <div className='herocard'>
                <Card className='card-item'>
                    <CardHeader
                        variant='h1'
                        title={this.props.name}
                    />
                    <CardActionArea style={{cursor: 'default'}}>
                        <img className='card-img' src={this.props.img} alt='card-img' />
                        <CardContent>
                           <h4>Hello</h4>
                           <ul>
                               <li>My</li>
                               <li>One</li>
                           </ul>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

export default HeroCard;