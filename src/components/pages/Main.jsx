// external imports
import React, { Component } from 'react';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import { NotificationContainer, NotificationManager } from 'react-notifications';
// external css imports
import 'axios-progress-bar/dist/nprogress.css'
import 'react-notifications/lib/notifications.css';
// component imports
import SearchBar from '../searchbar/SearchBar';
import NavLinks from '../navlinks/NavLinks';
import Team from '../team/Team';
import OtherLinks from '../otherlinks/OtherLinks';

loadProgressBar()

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const accessToken = '10223119854329359'

class Main extends Component {
    constructor(props) {
        super (props);

        this.state = {
            data: [],
            isLoaded: false,
            errorMssg: '',
            text: '',
            helperText: 'Loading ...',
            team: [],
            show: true,
            hide: false,
            instructions: false
        }

        // axios cancel token
        this.src = ''
        
        this.search = this.search.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.toggleInstructions = this.toggleInstructions.bind(this);
    }

    toggleInstructions () {
        this.setState({
            instructions: !this.state.instructions
        })
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
        if (!array.includes(item)) {
            array.push(item);
            NotificationManager.success(item.name + ' has been added to your team.', 'Success', 3000)
        } else {
            NotificationManager.error(item.name + ' is already in your team.','Warning', 3000);
            // alert(item.name +' is already in your team.')
        }
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
                errorMssg: '',
                helperText: ''
            })

            if(typeof this.state.data === 'undefined') {
                this.setState({
                    helperText: 'Search for your hero.',
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
                    errorMssg: 'Error occured, check console for details.'
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
        // console.log(this.state.isLoaded ? this.state.errorMssg : this.state.errorMssg);
        console.log(this.state.data)
        return (
            <div className='main'>
                <NavLinks handleHide={this.handleHide} handleShow={this.handleShow}/>
                <div className={this.state.hide ? 'hide' : 'fetchsuperhero'}>
                    <SearchBar add={this.add} helperText={this.state.helperText} text={this.state.text} onTextChange={this.onTextChange.bind(this)} data={this.state.data} handleHide={this.handleHide} />
                    <Team team={this.state.team} />
                    <NotificationContainer />
                    <p style={{position: 'absolute', bottom: '0', right: '30px', color: 'red'}}>{this.state.errorMssg}</p>
                    <OtherLinks toggleInstructions={this.toggleInstructions} instructions={this.state.instructions} />
                </div>
            </div>
        )
    }
}

export default Main;