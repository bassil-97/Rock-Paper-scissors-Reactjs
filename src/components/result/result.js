import React, {useEffect, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import './result.css';

import Paper from '../circles/blue';
import Rock from '../circles/red';
import Scissors from '../circles/yellow';
import { ScoreContext } from '../../scoreContext';

const ari = require('array-random-item');

export default function Result(props) {

    useEffect(()=> {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const userSelection = urlParams.get('selection');

        let choice = ari([1, 2, 3]);
        
       if(choice == 1) {
            setHouseChoice(<Paper />);
        } else if(choice == 2) {
            setHouseChoice(<Rock />);
        } else {
            setHouseChoice(<Scissors />);
        } 

        if(userSelection == 'paper') {
            setUserChoice(<Paper style={{PointerEvent: 'none'}}/>);
        } else if(userSelection == 'rock') {
            setUserChoice(<Rock style={{PointerEvent: 'none'}} />);
        } else {
            setUserChoice(<Scissors style={{PointerEvent: 'none'}} />);
        }


        if(userSelection == 'paper' && choice == 2) {
            setDidWin("you win");  
            setScore(score + 1);
        } else if(userSelection == 'rock' && choice == 3) {
            setDidWin("you win");
            setScore(score + 1);
        } else if(userSelection == 'scissors' && choice == 1) {
            setDidWin("you win");
            setScore(score + 1);
        } else if( ((userSelection == 'paper') && (choice == 1)) || ((userSelection == 'rock') && (choice == 2)) || ((userSelection == 'scissors') && (choice == 3)) ) {
            setDidWin("Draw");
        } else {
            setDidWin("you lose");
        }

    }, []);

    const history = useHistory();

    const [userChoice, setUserChoice] = useState();
    const [houseChoice, setHouseChoice] = useState();
    const [userWins, setDidWin] = useState(false);
    const {score, setScore} = useContext(ScoreContext);
  
    const playAgain = () => {
        history.replace('/start');
    }

    return (
        <div className="result-wrapper">
            <div className="row w-100 mb-2">
                <div className="col-lg-6 mb-4">
                    <h4 className="mb-4">you picked</h4>
                    {userChoice}
                </div>
                <div className="col-lg-6 mb-4">
                    <h4 className="mb-4">the house picked</h4>
                    {houseChoice}
                </div>
            </div>
            <div className="row w-100 d-flex flex-column align-items-center justifiy-content-center">
                {<h1 className="result-title">{userWins}</h1>}
                <button id="play-again-btn" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}
