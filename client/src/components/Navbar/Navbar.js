import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button ,createMuiTheme, ThemeProvider, IconButton  } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import decode from 'jwt-decode';





import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const theme=createMuiTheme({
    typography:{fontSize: 13,
     fontFamily: [
      'Roboto Condensed', 
      'sans-serif'
     ].join(','),
    }
 
  });



  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };



  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
    <AppBar className={classes.appBar} position="static" color="inherit">



      <Link to="/search" className={classes.brandContainer}>
        
        <h2 className={classes.hobbyists} fontWeight='bolder'>Search Blogs</h2>
      </Link>

      
      <Link to="/posts" className={classes.brandContainer}>
        
        <h2 className={classes.quiz}>All Blogs</h2>
      </Link>
      <Link to="/blogs" className={classes.brandContainer}>
        
        <h2 className={classes.hobbyists} fontWeight='bolder'>Publish Blogs</h2>
      </Link>

      <Link to="/QuizHome" className={classes.brandContainer}>
        
        <h2 className={classes.quiz}>QuizTime</h2>
      </Link>

      <Link to="/Dashboard" className={classes.brandContainer}>
        {/* <img  component={Link} to="/Dashboard" src={vidres} alt="icon" height="40px" /> */}
        <h6 className={classes.resources}>Resources</h6>
      </Link>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>



        




          <IconButton><Avatar className={classes.purple} onClick={logout} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar></IconButton> 
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
           
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button className={classes.signin} component={Link} to="/auth" variant="contained" >Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
       </ThemeProvider>
  );
};

export default Navbar;
