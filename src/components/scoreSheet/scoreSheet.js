import React, {useContext} from 'react';
import {ScoreContext} from '../../scoreContext';
import './scoreSheet.css';

export default function ScoreSheet(props) {

    const value = useContext(ScoreContext);

    return (
        <div className="game-score-wrapper">
            <small className="mb-4">SCORE</small>
            <h1>{props.score}</h1>
        </div>
    )
}
