import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavLinks extends Component {
    render() {
        return (
            <div className='navlinks'>
                <ul>
                    <li>
                        <Link to='/'>Search</Link>
                    </li>
                    <li>
                        <Link to='/details'>Hero Details</Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default NavLinks;