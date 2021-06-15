import React, { useState, useReducer } from "react";
import Modal from "./Components/Modal";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { authenticated } from "./actions";

const reducer = (state, action) => {
  if (action.type === "INVALID_DETAILS") {
    return {
      ...state,
      showModal: true,
      modalContent: "ENTER VALID DETAILS",
    };
  } else if (action.type === "PASSWORD_PREVIEW") {
    return {
      ...state,
      showPassword: true,
    };
  } else if (action.type === "HIDE_PASSWORD") {
    return {
      ...state,
      showPassword: false,
    };
  }
};

const defaultState = {
  userName: "sample",
  password: "sample",
  showModal: false,
  modalContent: "",
  showPassword: false,
};

function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const history = useHistory();
  const dispatcher = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      defaultState.userName === userName &&
      defaultState.password === password
    ) {
      history.push("./dashboard");
      dispatcher(authenticated());
      localStorage.setItem("id",JSON.stringify(defaultState))
    } else {
      dispatch({ type: "INVALID_DETAILS" });
      setUserName("");
      setPassword("");
      document.querySelector(".username").setAttribute("error", true);
    }
  };

  const handleClickShowPassword = () => {
    dispatch({ type: "PASSWORD_PREVIEW" });
  };

  const handleMouseDownPassword = () => {
    dispatch({ type: "HIDE_PASSWORD" });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            className="username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            placeholder="Username"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type={state.showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button fullWidth type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </form>
        {state.showModal && <Modal modalContent={state.modalContent} />}
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

export default Home;
