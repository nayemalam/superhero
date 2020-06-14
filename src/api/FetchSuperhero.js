import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchbar/SearchBar';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

loadProgressBar()

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const accessToken = '10223119854329359'

class FetchSuperhero extends Component {
    constructor(props) {
        super (props);

        this.state = {
            data: [],
            isLoaded: false,
            loadedMssg: 'data loading ...',
            text: '',
            filteredData: []
        }

        this.src = ''
    }

    search = query => {
        const API = `https://superheroapi.com/api/${accessToken}/search/${query}/`;

        if (this.src) {
            this.src.cancel();
        }

        this.src = axios.CancelToken.source();
        
        try {
            axios.get(PROXY + API, {
                cancelToken: this.src.token
            })
            .then(result => 
                this.setState({
                    data: result.data.results,
                    isLoaded: true,
                    loadedMssg: 'data loaded.'
                })
            )
        }
        catch(error) {
            if(axios.isCancel(error)) {
                console.log('Req cancelled', error.message)
            } else {
                this.setState({
                    loadedMssg: 'Too many requests, please wait 10 minutes.'
                })
                console.log("Can’t access " + API + " response. Blocked by browser")
            }
        }

    }
    componentDidMount () {
        this.search();
    }

    onTextChange (event) {
        this.setState({
            text: event.target.value
        })
        if(this.state.data !== null) {
            this.search(event.target.value)
        }
        // console.log(event.target.value)
    }


    searchingFor(term) {
        return function(x) {
            return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

    render () {
        // console.log(this.state.isLoaded ? this.state.loadedMssg : this.state.loadedMssg);
        console.log(this.state.data)

        return (
            <div>
                <p style={{position: 'absolute', bottom: '0', right: '30px'}}>{this.state.loadedMssg}</p>
                <SearchBar text={this.state.text} onTextChange={this.onTextChange.bind(this)} data={this.state.data} searchingFor={this.searchingFor}/>
            </div>
        )
    }
}

export default FetchSuperhero;