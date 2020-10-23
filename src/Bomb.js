// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    bcounter() {
        if (this.state.secondsLeft !== 0) {
            return (
                <h6>{this.state.secondsLeft} seconds left before I go boom!</h6>
            )
        } else {
            return(
            <h6>Boom!</h6>)
        }
    }

    render() {
        return (
            <div>
                {this.bcounter()}
            </div>
        )
    }
}
