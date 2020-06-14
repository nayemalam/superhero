import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchbar/SearchBar';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import NavLinks from '../components/navlinks/NavLinks';

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
            helperText: '',
            team: [],
            show: true,
            hide: false
        }

        // axios cancel token
        this.src = ''
        
        this.search = this.search.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleHide () {
        this.setState({
            show: false,
            hide: true 
        })
    }

    handleShow () {
        this.setState({
            show: true,
            hide: false 
        })
    }

    add = (item) => {
        var array = [...this.state.team]
        array.push(item)
        this.setState({
            team: array
        })
    }

    search = query => {
        const API = `https://superheroapi.com/api/${accessToken}/search/${query}/`;

        if (this.src) {
            this.src.cancel();
        }

        this.src = axios.CancelToken.source();
    
        axios.get(PROXY + API, {
            cancelToken: this.src.token
        })
        .then(result => {
           
            this.setState({
                data: result.data.results,
                isLoaded: true,
                loadedMssg: 'data loaded.',
                helperText: ''
            })

            if(typeof this.state.data === 'undefined') {
                this.setState({
                    helperText: 'Hero does not exist.',
                })
            } 
        })
        .catch(error => {
            if(axios.isCancel(error) || error) {
                console.log('Req cancelled', error.message)
                this.setState({
                    isLoaded: false
                })
            } else {
                this.setState({
                    isLoaded: false,
                    loadedMssg: 'Error occured, check console for details.'
                })
                console.log("Can’t access " + API + " response. Blocked by browser")
            }
        })

    }

    componentDidMount () {
        this.search();
    }

    onTextChange (event) {
        this.setState({
            text: event.target.value
        })
        this.search(event.target.value)
        
        // console.log(event.target.value)
    }

    render () {
        // console.log(this.state.isLoaded ? this.state.loadedMssg : this.state.loadedMssg);
        console.log(this.state.data)
        return (
            <div>
                <NavLinks handleHide={this.handleHide} handleShow={this.handleShow}/>
                <div className={this.state.hide ? 'hide' : 'fetchsuperhero'}>
                    <p style={{position: 'absolute', bottom: '0', right: '30px'}}>{this.state.loadedMssg}</p>
                    <SearchBar add={this.add} helperText={this.state.helperText} text={this.state.text} onTextChange={this.onTextChange.bind(this)} data={this.state.data} handleHide={this.handleHide} />
                    <div style={{position: 'absolute', top: '16px'}}>
                        <h3>Team:</h3>
                        <ul style={{textAlign: 'center'}}>
                            {(this.state.team || [])
                                .map((item,id) => (
                                    <li key={id}>{item.powerstats.combat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default FetchSuperhero;