import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchResults from './SearchResults';

class SearchBar extends Component {

    render() {
        return (
            <div className='searchbar'>
                <SearchField onTextChange={this.props.onTextChange} />
                <p style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>{this.props.helperText}</p>
                <SearchResults data={this.props.data} handleHide={this.props.handleHide} add={this.props.add} />
            </div>
        )
    }
}

export default SearchBar;