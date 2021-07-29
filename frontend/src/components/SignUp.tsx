import React, { FormEvent, useState } from 'react';
import { Button, TextField, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";
import { getMockAuth } from '../services/apiService/apiService';


interface IProps {
  onClose: () => void;
}

interface IState {
  userData: IUser;
  // todo вынести логику снэкбара выше
  snackbarData: ISnackbarData;
}

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface ISnackbarData {
  open: boolean,
  message: string,
}

type THandleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

type THandleSubmit = (event: FormEvent, userData: IUser) => void;

const SignUp = (props: IProps) => {
  const { onClose } = props;
  const [ userData, setUserData ] = useState<IState['userData']>({
    name: '',
    email: '',
    password: '',
  })
  const [ snackbarData, setSnackbarData ] = useState<IState['snackbarData']>({
    open: false,
    message: '',
  });

  const handleChange: THandleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit: THandleSubmit = async (event, userData) => {
    event.preventDefault();
    try {
      const response = await getMockAuth(userData);
      if (response.status !== 200) {
        setSnackbarData({ open: true, message: 'Server\'s logic error' });
      }
      setSnackbarData({ open: true, message: response.message });
      window.setTimeout(() => onClose(), 2000);
    } catch ({ message }) {
      setSnackbarData({ open: true, message });
    }
  }

  const handleCloseSnackbar = () =>
    setSnackbarData({ ...snackbarData, open: false });

  const classes = useStyles();

  return (
    <>
      <form
        className={classes.form}
        onSubmit={(event) => handleSubmit(event, userData)}
      >
        <TextField
          name="userName"
          id="standard-required"
          label="Имя"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          required
          name="userEmail"
          id="standard-required"
          label="Почта"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          required
          name="userPassword"
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handleChange}
        />
        <Button
          fullWidth
          color="primary"
          type="submit"
          className={classes.logInBtn}
        >
          Войти
        </Button>
      </form>
      // todo доработать успешные/предупреждающие/ошибочные кейсы
      <Snackbar open={snackbarData.open}>
        <MuiAlert elevation={6} severity="error" variant="filled" onClose={handleCloseSnackbar}>{snackbarData.message}</MuiAlert>
      </Snackbar>
    </>
  )
}

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: '15px',

    '& > div': {
      margin: '15px 40px 0 40px',
    },
    '& > div:first-child': {
      marginTop: '0',
    },
  },
  logInBtn: {
    marginTop: 'auto',
  },
}));

export default SignUp;
