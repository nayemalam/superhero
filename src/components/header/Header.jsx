import React, { Component } from 'react';
import superhero from '../../images/superhero-img.jpg';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Superhero Squad <span role='img' aria-label='lightning emoji'>⚡</span></h1>
                <img src={superhero} width='400' alt='superhero logo' />
            </div>
        )
    }
}

export default Header;