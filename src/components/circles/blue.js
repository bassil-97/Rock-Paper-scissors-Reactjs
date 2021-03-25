import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '../../images/icon-paper.svg';
import './circles.css';

const useStyles = makeStyles((theme) => ({
    blue: {
      width: '150px',
      height: '150px',
      border: '15px solid #1A5276',
      borderRadius: '50%',
      background: `url(${Paper}) center no-repeat`,
      backgroundColor: '#F0F3F4',
      boxShadow: '4px 4px 10px #000000',
      transition: '.5s'
    },
}));
  

export default function Blue(props) {

    const classes = useStyles();

    return (
        <div onClick={()=>props.selected('paper')}>
            <div className={classes.blue} id="blue-circle"></div>
        </div>
    )
}
