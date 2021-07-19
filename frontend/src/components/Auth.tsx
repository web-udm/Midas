import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import SignIn from "./SignIn";
import SignUp from "./SignUp";


interface IProps {
  onClose: () => void;
}

interface ITabPanelProps {
  index: any;
  value: any;
  children: React.ReactNode;
  classes: Record<string, string>;
}


function TabPanel(props: ITabPanelProps) {
  const { children, value, index, classes, ...other } = props;

  return (
    <>
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
    </>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const AuthModal = (props: IProps) => {
  const { onClose } = props;
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={tabIndex}
        indicatorColor="primary"
        variant="fullWidth"
        aria-label="simple tabs example"
        className={classes.tabs}
        onChange={handleChange}
      >
        <Tab label="Вход" {...a11yProps(0)} />
        <Tab label="Регистрация" {...a11yProps(1)} />
      </Tabs>
      <TabPanel
        value={tabIndex}
        index={0}
        classes={classes}
      >
        <SignIn onClose={onClose}/>
      </TabPanel>
      <TabPanel
        value={tabIndex}
        index={1}
        classes={classes}
      >
        <SignUp onClose={onClose}/>
      </TabPanel>
    </div>
  );
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
