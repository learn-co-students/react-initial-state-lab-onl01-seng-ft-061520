import React, { Component } from 'react';
import { ProvidePlugin } from 'webpack';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        if (this.state.secondsLeft === 0) {
            return <h1>Boom!</h1>
        }else {
            return <h1>120 seconds left before I go boom!</h1>;
        }
          
    }
}