import React from 'react';
import Sidebar from '../common/Sidebar';
import { Grid, CircularProgress,createMuiTheme, ThemeProvider  } from '@material-ui/core';
import Card from '../common/Card';
import samples from './samples';
import { useState } from "react";
import { Redirect,useParams, useHistory, Link } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
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
  if (!user) {
    return <Redirect to="/auth" />
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
