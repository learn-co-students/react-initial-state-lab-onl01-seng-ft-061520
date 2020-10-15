import React from 'react';

// your Bomb code here!


class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        const message = this.secondsLeft === 0 ? 'Boom!' : `${this.secondsLeft} seconds left before I go boom!`
        return (
            <div>{message}</div>
        )
    }
}
export default Bomb