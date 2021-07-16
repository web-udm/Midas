import React from 'react';
import {
  Dialog,
  DialogContent,
  Paper,
} from '@material-ui/core';
import withStyles, { WithStylesOptions } from '@material-ui/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  content?: any;
  classes: Record<string, string>;
}

type TProps = IProps & WithStylesOptions;

const Modal = (props: TProps) => {
  const { children, classes, onClose } = props;
  console.log(children);

  return (
    <Dialog
      open={props.isOpen}
      className={classes.root}
      onClose={onClose}
    >
      <Paper className={classes.root}>
        {/*<DialogTitle>456789</DialogTitle>*/}
        <DialogContent className={classes.content}>
          {children}
        </DialogContent>
        {/*<DialogActions>*/}
        {/*  <Button color="primary" onClick={() => console.log(123)}>da</Button>*/}
        {/*  <Button onClick={() => console.log(321)}>net</Button>*/}
        {/*</DialogActions>*/}
      </Paper>
    </Dialog>
  )
}

export function styles(): StyleRules {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      // height: '200px',

      borderBottom: '1px solid grey',
      '& > :first-child': {
        paddingTop: 0,
      }
    },
    content: {
      padding: 0,
    },
  };
}

export default withStyles(styles)(Modal);
