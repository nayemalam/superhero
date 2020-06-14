import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

class NavLinks extends Component {
    render() {
        return (
            <div className='navlinks'>
                <ul>
                    <li>
                        <Button>
                            <Link to='/' onClick={this.props.handleShow}>Search</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='/details' onClick={this.props.handleHide}>Hero Details</Link>
                        </Button>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default NavLinks;