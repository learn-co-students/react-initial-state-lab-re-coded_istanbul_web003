// your Bomb code here!
import React, {Component} from "react";

export default class Bomb extends Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    bombCounter(){
        if(this.state.secondsLeft !== 0){
            return (
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }else{
            return "Boom!"
        }
    }
    render(){
        return(
        <div>{this.bombCounter()}</div>

        )
    }
}