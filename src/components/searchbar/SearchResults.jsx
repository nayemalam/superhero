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
                        <li key={id}>{item.name} | 
                            <Link to={{
                                pathname: '/details',
                                aboutProps: item
                            }} onClick={this.props.handleHide}>Select</Link> |
                            <Button onClick={() => this.props.add(item)}>ADD</Button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchResults;