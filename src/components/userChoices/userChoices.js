import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Blue from '../circles/blue';
import Red from '../circles/red';
import Yellow from '../circles/yellow';

export default function UserChoices(props) {

    useEffect(()=> {
        
    }, [])

    const history = useHistory();

    const getUserSelection = (selection) => {
        history.push(`/result?selection=${selection}`);
    }    

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="row w-100 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <Blue selected={getUserSelection} />
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center my-4">
                    <Red selected={getUserSelection}/>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <Yellow selected={getUserSelection}/>
                </div>
            </div>
        </div>
    )
}
