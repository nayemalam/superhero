import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class SearchField extends Component {
    render() {
        return (
            <div className='search-field'>
                <SearchIcon className='search-icon' />
                <InputBase
                    className='input-base'
                    placeholder="Enter hero name ..."
                    fullWidth
                    onChange={this.props.onTextChange}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        )
    }
}

export default SearchField;