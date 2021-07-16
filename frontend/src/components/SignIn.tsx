import React, { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


interface IProps {
  onClose: () => void;
}

interface IState {
  userNameOrEmail: string;
  userPassword: string;
}

type THandleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
type THandleSubmit = (event: React.FormEvent<HTMLButtonElement>, onClose: () => void) => void;


const SignIn /*React.FC*/ = (props: IProps) => {
  const { onClose } = props;
  const [ userData, setUserData ] = useState({
    userNameOrEmail: '',
    userPassword: '',
  })

  const handleChange: THandleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }) as Pick<IState, keyof IState>)
  }

  const handleSubmit: THandleSubmit = async (event, onClose) => {
    event.preventDefault();
    console.log('click to signIn');
    onClose();
  }
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <TextField
        required
        name="userNameOrEmail"
        id="standard-required"
        label="Имя или почта"
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
        onClick={(event) => handleSubmit(event, onClose)}
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

export default SignIn;
