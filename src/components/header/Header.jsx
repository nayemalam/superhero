import React, { Component } from 'react';
import superhero from '../../images/superhero-img.jpg'
import NavLinks from '../navlinks/NavLinks';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Superhero Squad</h1>
                <NavLinks />
                <img src={superhero} width='400' alt='superhero logo' />
            </div>
        )
    }
}

export default Header;