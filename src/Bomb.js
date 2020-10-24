// your Bomb code here!
import React from "react";


export default class Bomb extends React.Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  handleBomb = () => {
    return (
      this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    );
    
  }

  render() {
    return <h1>{this.handleBomb()}</h1>;
  }
}