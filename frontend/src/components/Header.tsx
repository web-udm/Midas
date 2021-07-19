import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Modal } from './Modal';
import { AuthModal } from './Auth';
import { makeStyles } from '@material-ui/core/styles';


interface IProps {
  text: string;
}


export const PageHeader = (props: IProps) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const classes = useStyles();

  return (
    <header className={classes.root}>
      {props.text}
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>da</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <AuthModal onClose={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
      borderBottom: '1px solid grey',
    }
  }
});


