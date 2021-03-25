import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Scissors from '../../images/icon-scissors.svg';

const useStyles = makeStyles((theme) => ({
    yellow: {
      width: '150px',
      height: '150px',
      border: '15px solid #F1C40F',
      borderRadius: '50%',
      background: `url(${Scissors}) center no-repeat`,
      backgroundColor: '#F0F3F4',
      boxShadow: '4px 4px 10px #000000',
      transition: '.5s'
    },
}));
  

export default function Yellow(props) {

    const classes = useStyles();

    return (
        <div onClick={()=>props.selected('scissors')}>
            <div className={classes.yellow} id="yellow-circle"></div>
        </div>
    )
}
