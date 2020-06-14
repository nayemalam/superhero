import React, { Component } from 'react';
import superhero from '../../images/superhero.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Superhero Squad</h1>
                <img src={superhero} width='100' alt='superhero logo' />
            </div>
        )
    }
}

export default Header;