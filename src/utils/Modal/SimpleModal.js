import { makeStyles, Modal } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
    // height: '10%'
  }
}));

export default function SimpleModal({ open, close, body }) {
  const classes = useStyles();

  return (
    <Modal
      open={ open }
      onClose={ close }
      className={ classes.modal }
    >
      { body }
    </Modal>
  )
}


  

