import React, { useState } from 'react';
import withStyles, { WithStylesOptions } from '@material-ui/styles/withStyles';
import { Button } from '@material-ui/core';
import Modal from './Modal';
import Auth from './Auth';


interface IProps {
  text: string;
  classes: Record<string, string>;
}

type TProps = IProps & WithStylesOptions;


const HeaderF = (props: TProps) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  return (
    <header className={props.classes.root}>
      {props.text}
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>da</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Auth onClose={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  )
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '200px',

    borderBottom: '1px solid grey',
  }
};

export default withStyles(styles)(HeaderF);


