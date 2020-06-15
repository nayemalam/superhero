import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TeamMembers extends Component {
    render() {
        return (
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
        )
    }
}
