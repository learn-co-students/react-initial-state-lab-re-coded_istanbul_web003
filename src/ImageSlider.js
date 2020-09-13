// your ImageSlider code here!
import React, {Component} from "react"

export default class ImageSlider extends Component {
    constructor (props){
        super(props)
        this.state ={
            currentSlideIndex: this.props.currentSlideIndex
        }
    }
    render() {
        return (<p>I am on slide {this.state.currentSlideIndex}</p>)
    }
}

ImageSlider.defaultProps ={
    currentSlideIndex: 0
}