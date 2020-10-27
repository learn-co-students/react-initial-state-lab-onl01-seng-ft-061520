import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
        
    }
    
    render() {
        let content;
        if (this.state.secondsLeft == 0) {
            content = "Boom!"
        } else {
            content = `${this.state.secondsLeft} seconds left before I go boom!` 
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Bomb;