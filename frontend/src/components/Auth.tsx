import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { WithStylesOptions } from '@material-ui/styles/withStyles';
import {
  Tabs,
  Tab,
} from '@material-ui/core';

import SignIn from "./SignIn";
import SignUp from "./SignUp";


interface IProps {
  // classes: Record<string, string>;
  onClose: () => void;
}

interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  classes: Record<string, string>;
}

type TProps = IProps & WithStylesOptions;


function TabPanel(props: ITabPanelProps) {
  const { children, value, index, classes, ...other } = props;

  return (
    <Fragment>
      {value === index && <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>{children}</>
        )}
      </div>}
    </Fragment>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SimpleTabs(props: any) {
  const { onClose } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  console.log(1230);

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        className={classes.tabs}
        variant="fullWidth"
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Вход" {...a11yProps(0)} />
        <Tab label="Регистрация" {...a11yProps(1)} />
      </Tabs>
      <TabPanel classes={classes} children={ <SignIn onClose={onClose}/> } value={value} index={0} />
      <TabPanel classes={classes} children={ <SignUp /> } value={value} index={1} />
    </div>
  );
}

const Auth = (props: TProps) => {
  const { onClose } = props;
  return (
    <SimpleTabs onClose={onClose}/>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    width: '600px',
    height: '330px',
    padding: '0',

    '& > div:nth-child(2)': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    }
  },
  tabs: {
    '& button': {
      padding: '20px 12px',
    }
  },
}));

export default Auth;
