import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Rules from '../../images/image-rules.svg';

export default function FormDialog(props) {

  return (
    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">RULES</DialogTitle>
        <DialogContent>
          <img src={Rules} alt="Game Rules" className="img-fluid" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
