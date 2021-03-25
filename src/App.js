import React, {useState, useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import './App.css';

import RulesModal from './components/rulesModal/rulesModal';

import Logo from './images/logo.svg';
import UserChoices from './components/userChoices/userChoices';
import Result from './components/result/result';
import ScoreSheet from './components/scoreSheet/scoreSheet';
import {ScoreContext} from './scoreContext';

function App() {

  useEffect(()=> {
    history.push('/start');
  }, [])

  const history = useHistory();
  const [open, setOpen] = useState(false);

  const [score, setScore] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
     <div className="main-banner">
       <div className="main-banner-logo">
         <img src={Logo} alt="Game Logo" />
       </div>
       <ScoreSheet score={score}/>
     </div>
     <div className="game-body">
     <ScoreContext.Provider value={{score, setScore}}>
       <Switch>
          <Route path="/start" component={UserChoices} />
          <Route path="/result" component={Result} />
       </Switch>
       </ScoreContext.Provider>
     </div>
     <div className="rules-wrapper">
       <button id="rules-btn" onClick={handleClickOpen}>Rules</button>
     </div>
     <RulesModal open={open} close={handleClose} />
    </div>
  );
}

export default App;
