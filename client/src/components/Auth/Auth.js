import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, Grid, Typography, Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';



import Icon from './icon';
import signinl from '../../images/signin.gif';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.authData);
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);


 

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
   

  };


  const handleSubmit = (e) => {
    e.preventDefault();
  


    if (isSignup) {
      dispatch(signup(form, history));

    } else {
      dispatch(signin(form, history));
      

    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');

    } catch (error) {
      console.log(error);



    }
  };
  const theme = createMuiTheme({
    typography: {
      fontFamily: [

        'Fresca',
        'sans-serif'

      ].join(','),
    }

  });

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <Paper className={classes.paper} elevation={6}>
          <img className={classes.avatar} src={signinl} alt="icon" height="100px" width='100px' />
          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit} >

            <Grid container spacing={2}>

              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />

                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignup &&   <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" 
              
              
               />}

            </Grid>
            <Button type="submit" fullWidth variant="contained" className={classes.submit} >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
           
            <GoogleLogin
              clientId="397871205333-ulghgaggkpho2k11dr1jjb2vg29f1qbi.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"

            />
            <Grid container justify="flex-end">
              <Grid item>
                <Button className={classes.already} onClick={switchMode}>
                
                  {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>

              </Grid>

            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
