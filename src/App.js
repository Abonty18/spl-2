import React from 'react';
import ReactPlayer from "react-player";
import { useState } from "react";
import axios from "axios";
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Header from "./components/Header/Header";
import QuizHome from "./components/QuizHome/QuizHome";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import PrivateRoute from './PrivateRoute'

import Header1 from './components/common/Header';
import Dashboard from './components/dashboard';
import FrontendResource from './components/front-resource';
import BackendResource from './components/back-resource';
import Infrastructure from './components/infrastructure';
import InfrastructureVideo from './components/infrastructure-video';

import BackendVideo from './components/back-video';



const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [questions, setQuestions] = useState();
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  
  

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/QuizHome" > 
            <QuizHome
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result score={score} />
          </Route>
          
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/Dashboard"><Dashboard /></Route>

      <Route  path="/frontend-resource" ><FrontendResource /></Route>
      <Route  path="/backend-resource" ><BackendResource /></Route>
      <Route  path="/infrastructure-resource" ><Infrastructure/></Route>
      <Route path="/infrastructure-video"><InfrastructureVideo/></Route>
     
      <Route  path="/backend-video" ><BackendVideo/></Route>
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
    
  );
};

export default App;
