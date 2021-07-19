import React from 'react';
import {
  Dialog,
  DialogContent,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


interface IProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}


export const Modal = (props: IProps) => {
  const { children, isOpen, onClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      className={classes.root}
      onClose={onClose}
    >
      <Paper className={classes.root}>
        <DialogContent className={classes.content}>
          {children}
        </DialogContent>
      </Paper>
    </Dialog>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid grey',
      '& > :first-child': {
        paddingTop: 0,
      }
    },
    content: {
      padding: 0,
    },
  }
});
