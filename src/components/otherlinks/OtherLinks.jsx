import React, { Component } from 'react'
// import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
import Instructions from './Instructions';

class OtherLinks extends Component {
    render() {
        return (
            <div className='otherlinks'>
                <ul>
                    <li>
                        <Button onClick={this.props.toggleInstructions}>
                            <u>Instructions?</u>
                        </Button>
                    </li>
                    {/* <li>
                        <Button>
                            <a style={{color: 'black'}} href='http://github.com/nayemalam/' target='_blank' rel="noopener noreferrer"> <GitHubIcon /></a>
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