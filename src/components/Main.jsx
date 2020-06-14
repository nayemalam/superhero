import React, { Component } from 'react';
import Header from './header/Header';
// import SearchBar from './searchbar/SearchBar';
import FetchSuperhero from '../api/FetchSuperhero';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Header />
                <FetchSuperhero />
                
            </div>
        )
    }
}

export default Main;