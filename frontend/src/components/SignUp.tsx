import React, { FormEvent, useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getAuth } from '../services/apiService/apiService';


interface IProps {
  onClose: () => void;
}

interface IState {
  userName: string;
  userEmail: string;
  userPassword: string;
}

type THandleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

type THandleSubmit = (event: FormEvent, userData: IState, onClose: () => void) => void;

const handleSubmit: THandleSubmit = async (event, userData, onClose) => {
  event.preventDefault();
  await getAuth(userData);
  onClose();
}

const SignUp = (props: IProps) => {
  const { onClose } = props;
  const [ userData, setUserData ] = useState<IState>({
    userName: '',
    userEmail: '',
    userPassword: '',
  })

  const handleChange: THandleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      onSubmit={(event) => handleSubmit(event, userData, onClose)}
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
