import React, { Component } from 'react'
// import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
import Instructions from './Instructions';

class OtherLinks extends Component {
    render() {
        return (
            <div className='otherlinks'>
                <ul>
                    <li style={{display: 'inline-block', listStyleType: 'none'}}>
                        <Button onClick={this.props.toggleInstructions}>
                            <u>Instructions?</u>
                        </Button>
                    </li>
                    {/* <li style={{display: 'inline-block', listStyleType: 'none'}}>
                        <Button>
                            <a style={{color: 'black'}} href='https://github.com/nayemalam/superhero' target='_blank' rel="noopener noreferrer"> <GitHubIcon /></a>
                        </Button>
                    </li> */}
                </ul>
                <div className={this.props.instructions ? '' : 'hide'}>
                    <Instructions />
                </div>
            </div>
        )
    }
}

export default OtherLinks;