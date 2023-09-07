import React from "react";
import body from "./body.css";
import { useState } from "react";
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";


export default function Body(){
    var diceImage=[dice1, dice2, dice3, dice4, dice5, dice6]

    const[image1, NewImage1]=useState(diceImage[0])
    const[image2, NewImage2]=useState(diceImage[1])

    const rollDice=()=>{
        var randomNum1 = Math.floor(Math.random()*6);
        var randomNum2 = Math.floor(Math.random()*6);
        NewImage1(diceImage[randomNum1]);
        NewImage2(diceImage[randomNum2]);

        if(randomNum1>randomNum2){
            document.querySelector(".body-h1").innerHTML= "Winner - Player 1🚩";
        }else if(randomNum1<randomNum2){
            document.querySelector(".body-h1").innerHTML="Winner - Player 2🚩";
        }else{
            document.querySelector(".body-h1").innerHTML="🏳️DRAW🏳️";
        }
    }

    return(
        <div className="body">
            <div className="body-heading">
                <h1 className="body-h1" >🎌LET'S PLAY🎌</h1>
            </div>

            <div className="image">
                <div>
                <div className="img-1">
                    <img className="image-both" src={image1} />
                    </div>
                    <div className="playername">
                    <h2>Player 1</h2>
                </div>
                </div>
                <div>
                <div className="img-1">
                    <img className="image-both" src={image2} />
                    </div>
                    <div className="playername">
                    <h2>Player 2</h2>
                    </div>
            </div>
            </div>

            <div className="btn">
                <button type="button" class="button-btn" onClick={rollDice}>ROLL DICE</button>
            </div>
        </div>
    );
}