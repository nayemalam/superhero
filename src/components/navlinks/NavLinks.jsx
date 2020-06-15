import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

class NavLinks extends Component {
    render() {
        return (
            <div className='navlinks'>
                <div className='nav-items'>
                    <ul>
                        <li>
                            <Button startIcon={<HomeIcon />}>
                                <Link to='/' >Home</Link>
                            </Button>
                        </li>
                        <li>
                            <Button startIcon={<InfoIcon />}>
                                <Link to='/details' >Hero Details</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default NavLinks;