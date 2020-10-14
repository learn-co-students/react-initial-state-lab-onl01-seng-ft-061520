import React, {Component} from 'react';

// your ImageSlider code here!
export default class ImageSlider extends Component {

    constructor(props){
        super()
        this.state = {
            currentSlideIndex : 0
        }
    }
    render(){
        return(
        <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}