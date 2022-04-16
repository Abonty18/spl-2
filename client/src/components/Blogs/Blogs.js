import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper, createMuiTheme, ThemeProvider } from '@material-ui/core';
import blog from '../../images/Blogging (3).gif';
import { useHistory, useLocation } from 'react-router-dom';

 import Form from '../Form/Form';

import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Blogs = () => {
  const classes = useStyles();
  const query = useQuery();
 
 

  const [currentId, setCurrentId] = useState(0);
 
  
 const theme=createMuiTheme({
  
   typography:{fontSize: 12,
    fontFamily: [
      'Fira Sans Condensed', 
      'sans-serif',
      
    ].join(','),
   }

 });



  return (
   <ThemeProvider theme={theme}>
   <div>
    <Grow in  >
      <Container maxWidth="xl">
        <Grid container justify="space-between" direction="row" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          
          <Grid  item  xs={12} sm={6} md={3}>
       <div className={classes.form} >
             <Form  currentId={currentId} setCurrentId={setCurrentId} /> 
             </div>
           
          </Grid>
          <img  src={blog} className="banner" alt="quiz app"  height="5px" width='5px'/>
        </Grid>
      </Container>
     
    </Grow> 
    </div>
   
    </ThemeProvider>
    
  );
};

export default Blogs;
