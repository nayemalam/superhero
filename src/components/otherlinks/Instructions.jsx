import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (
            <div className='instructions'>
                <ul>
                    <li>Search for a superhero using the search bar above. Here are some hints: batman, superman, batgirl, astro, etc.</li>
                    <ul>
                        <li style={{fontSize: '15px'}}>Additionally, you can type any letter and a list of superheros should show.</li>
                    </ul>
                    <li>Click 'View Details' to see it's details.</li>
                    <li>Click 'ADD' to add the super hero to your team.</li>
                    <li>That's it!</li>
                </ul>
                <h2> <span role='img' aria-label='exclamation emoji'>‼️</span> Note: If you searched for a hero and you've been waiting for more than 10 seconds, it means the hero does not exist.</h2>
                <p style={{textAlign: 'center'}}>Click the 'INSTRUCTIONS' button again to hide these instructions.</p>
            </div>
        )
    }
}

export default Instructions;