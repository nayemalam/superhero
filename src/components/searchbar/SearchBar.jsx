import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class SearchBar extends Component {

    render() {
        
        return (
            <div className='searchbar'>
                <div className='search-field'>
                    <SearchIcon className='search-icon' />
                    <InputBase
                        className='input-base'
                        placeholder="Search…"
                        fullWidth
                        onChange={this.props.onTextChange}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <p style={{textAlign: 'center'}}>{this.props.helperText}</p>
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
            </div>
        )
    }
}

export default SearchBar;