import React from 'react';
import Sidebar from '../common/Sidebar';
import { Grid, CircularProgress,createMuiTheme,Paper,Typography,  ThemeProvider  } from '@material-ui/core';
import Card from '../common/Card';
import samples from './samples';
import { useState } from "react";
import { Redirect,useParams, useHistory, Link } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import useStyles from './styles';
import blog from '../../images/loginplz.svg';


const theme=createMuiTheme({
  typography:{fontSize: 13,
   fontFamily: [
    'Fira Sans Condensed', 
    'sans-serif'
   ].join(','),
  }

});

const Dashboard = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));
  if (!user?.result?.name) {
    return (
      <ThemeProvider theme={theme}>
      
      <Paper className='paper1' elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to explore more features!
        </Typography>
        <img  src={blog} className="banner" alt="quiz app" padding='100px' height="100vh" width='100vh'/>

      </Paper>
      </ThemeProvider>
    );
  }
  const handleSubmit = () => {
    if (!user ) {
      setError(true);
      return;
    } else {
      setError(false);
     
      history.push("/Dashboard");
    }

   
  };
  return(
    
  <div className="flex flex-grow 1 ">
    <Sidebar />
    <div className="bg-white-400 w-4/5   text-gray-600 font-bold p-18">
      <div className="w-full flex flex-wrap ">
        {samples.map((sample) => (<Card sample={sample} />))}
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
