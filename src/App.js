import React, { Component } from "react";
import loonalist from './components/idols';
import Game from "./components/game";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gameStatus: true,
      maxScore: 0,
      curScore: 0,
      clicked: [],
      randomized: this.shuffleArray(),
    }
  }
  shuffleArray() {
    let array = loonalist
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  clicked = (idol) => {
    if(this.state.clicked.indexOf(idol) !== -1){
      this.setState((prevState) => ({
        ...prevState,
        maxScore: Math.max(this.state.maxScore, this.state.curScore),
        clicked: [],
        curScore: 0,
        randomized: this.shuffleArray(),
      }));
      return;
    }else{
      this.setState((prevState) => ({
        ...prevState,
        curScore: this.state.curScore + 1,
        clicked: this.state.clicked.concat(idol),
        randomized: this.shuffleArray(),
      }));
      return;
    }
  }
  render() {
    const{
      randomized,
      curScore,
      maxScore,
      clicked
    } = this.state
    console.log(clicked)
    return (
      <div>
        <div className="header">LOONA Memory Game</div>
        <Game loona = {randomized} clicked = {this.clicked} curScore = {curScore} maxScore = {maxScore} shuffle = {this.shuffleArray}/>
      </div>
      // <Header/>
    );
  }
}

export default App;
