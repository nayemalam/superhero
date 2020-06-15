import React, { Component } from 'react';
import { 
    Card,
    CardActionArea,
    CardContent,
    CardHeader
} from '@material-ui/core';

class HeroCard extends Component {
    render() {

        const data = (this.props.data);

        return (
            <div className='herocard'>
                <Card className='card-item'>
                    <CardHeader
                        className='card-header'
                        variant='h1'
                        title={data.name}
                    />
                    <CardActionArea style={{cursor: 'default'}}>
                        <img className='card-img' src={data.image.url} alt='card-img' />
                        <CardContent>
                           <h4>Biography</h4>
                           <ul>
                                <li><span>Full name:</span> {data.biography['full-name']}</li>
                                <li><span>Birthplace:</span> {data.biography['place-of-birth']}</li>
                                <li> <span>Also known as:</span> 
                                    <ul>
                                        {(data.biography.aliases || []).map((item, id) => (
                                            <li key={id}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                                <li><span>First movie:</span> {data.biography['first-appearance']}</li>
                                <li><span>Publisher:</span> {data.biography.publisher}</li>
                           </ul>
                           <h4>Power Levels</h4>
                           <ul>
                                <li><span>Intelligence:</span> {data.powerstats.intelligence}</li>
                                <li><span>Strength:</span> {data.powerstats.strength}</li>
                                <li><span>Speed:</span> {data.powerstats.speed}</li>
                                <li><span>Durability:</span> {data.powerstats.durability}</li>
                                <li><span>Power:</span> {data.powerstats.power}</li>
                                <li><span>Combat:</span> {data.powerstats.combat}</li>
                           </ul>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

export default HeroCard;