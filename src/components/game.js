import React, { Component } from "react";
import chuu from './images/chuu.jpg';
import heejin from './images/heejin.jpg';
import vivi from './images/vivi.jpg';
import hyunjin from './images/hyunjin.jpg';
import jinsoul from './images/jinsoul.jpg';
import choerry from './images/choerry.jpg';
import yves from './images/yves.jpg';
import gowon from './images/gowon.jpg';
import olivia from './images/olivia.jpg';
import yeojin from './images/yeojin.jpg';
import haseul from './images/haseul.jpg';
import kimlip from './images/kimlip.jpg';
import Card from "./card";
const images = {
    Chuu: chuu,
    Heejin: heejin,
    Vivi: vivi,
    Hyunjin: hyunjin,
    "Jin Soul": jinsoul,
    Choerry: choerry,
    Yves: yves,
    "Go Won": gowon,
    "Olivia Hye": olivia,
    Yeojin: yeojin,
    "Kim Lip": kimlip,
    "Haseul": haseul,
}
class Game extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        const {
            curScore,
            maxScore,
            loona,
            clicked,
        } = this.props;
        return(
            <div>
                <div className="flex">
                    <div>Current Score: {curScore}</div>
                    <div>High Score: {maxScore}</div>
                </div>
                <div className="board">
                    {loona.map((item, index) => {
                        return(
                            <Card key = {index} image = {images[item.idol]} idol = {item.idol} clicked = {clicked}/>
                            // <div className = "card" key = {index}>
                            //     <img src = {images[item.idol]} alt = {item.idol}></img>
                            //     <button onClick={() => {clicked(item.idol)}}>{item.idol}</button>
                            // </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Game;