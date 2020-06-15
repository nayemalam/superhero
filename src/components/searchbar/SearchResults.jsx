import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class SearchResults extends Component {
    render() {
        return (
            <div className='search-results'>
                <ul>
                    {(this.props.data || [])
                    .map((item,id) => (
                        <li key={id}>
                            <span className='name'>
                                {item.name}
                            </span>
                            <span className='link-details'>
                                <Link 
                                    to={{
                                        pathname: '/details',
                                        aboutProps: item
                                    }} 
                                    style={{color: 'black'}}
                                >
                                    View Details
                                </Link>
                            </span>
                            <span className='addBtn'>
                                <Button onClick={() => this.props.add(item)}>ADD</Button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchResults;