import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Rock from '../../images/icon-rock.svg';

const useStyles = makeStyles((theme) => ({
    red: {
      width: '150px',
      height: '150px',
      border: '15px solid #E74C3C',
      borderRadius: '50%',
      background: `url(${Rock}) center no-repeat`,
      backgroundColor: '#F0F3F4',
      boxShadow: '4px 4px 10px #000000',
      transition: '.5s'
    },
}));
  

export default function Red(props) {

    const classes = useStyles();

    return (
        <div onClick={()=>props.selected('rock')}>
            <div className={classes.red} id="red-circle"></div>
        </div>
    )
}
