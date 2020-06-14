import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class SearchBar extends Component {

    render() {
        
        return (
            <div className='searchbar'>
                <SearchIcon className='search-icon' />
                <InputBase
                    className='input-base'
                    placeholder="Search…"
                    fullWidth
                    onChange={this.props.onTextChange}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <ul>
                    {(this.props.data || [])
                    // .filter(this.props.searchingFor(this.props.text))
                    .map((item,id) => (
                        <li key={id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchBar;