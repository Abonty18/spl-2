import React from 'react';
import { Button, MenuItem, TextField,createMuiTheme,Paper,Typography, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { Redirect,useParams, useHistory, Link } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";
import quiz from '../../images/quiz.svg';
import blog from '../../images/loginplz.svg';
import useStyles from './styles';
const QuizHome = ({ fetchQuestions }) => {
  
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const classes = useStyles();
  const theme=createMuiTheme({
  
    typography:{
     fontFamily: [
      'Fresca', 
      'sans-serif'
     ].join(','),
    }
 
  });
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));
  if (!user) {
    return <Redirect to="/auth" />
  }
  // if (!user?.result?.name) {
  //   return (
  //     <ThemeProvider theme={theme}>
  //     <Paper className={classes.paper1} elevation={6}>
  //       <Typography variant="h6" align="center" >
  //         Please Sign In to explore more features!
  //       </Typography>
  //       <img  src={blog} className="banner" alt="quiz app" padding='100px' height="100vh" width='100vh'/>

  //     </Paper>
  //     </ThemeProvider>
  //   );
  // }
  const handleSubmit = () => {
    if (!category || !difficulty ) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }

   
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 40,fontWeight:'bolder' }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill All the fields</ErrorMessage>}
       
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 10 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 10}}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 ,alignSelf: "center", marginTop: 10,borderRadius:'25px', height:'8vh',fontSize: 20  }}
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src={quiz} className="banner" alt="quiz app" />
    </div>
    </ThemeProvider>
  );
};

export default QuizHome;
