import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
    <img className={classes.spinnerImage} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2LjAyMTggMjAuMTMyTDExLjgwNzkgMzQuODg4OUMxMy43NiAzNS42MDc1IDE1Ljg3MDggMzYgMTguMDczNiAzNkMyNy4zMzExIDM2IDM0Ljk2MjkgMjkuMDY4MyAzNi4wMjE4IDIwLjEzMlpNOCAzMi45NDdDMy4xNzQ2OSAyOS43MTUxIDAgMjQuMjI2OCAwIDE4QzAgMTEuNzczMiAzLjE3NDY5IDYuMjg0OTMgOCAzLjA1Mjk2VjMyLjk0N1pNMTAuODE1NiAxLjUxMDIzQzEzLjAzNyAwLjUzOTAyNCAxNS40OTIxIDAgMTguMDczNiAwQzI3LjY5NDQgMCAzNS41NTk1IDcuNDg2NTUgMzYuMTE1OCAxNi45MjkyTDEwLjgxNTYgMS41MTAyM1oiIGZpbGw9IiNFNTI2MUUiLz48L3N2Zz4=" width={36} height={36} alt="logo" />
    </div>
  )
};

const useStyles = makeStyles(() => ({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',
    margin: '0',
  },
  spinnerImage: {
    transition: 'all 5s ease',
    animation: '$rotate 1.5s linear infinite',
  },
  '@keyframes rotate': {
    from: {
      transform: 'rotate(-360deg)',
    },
  },
}));

export default Spinner;
