import React from 'react';

// your ImageSlider code here!


class ImageSlider extends React.Component {
    constructor () {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render() {
        return (
            <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}

export default ImageSlider