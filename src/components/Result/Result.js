import React from 'react';
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import result from '../../images/result.svg';
import result2 from '../../images/result2.svg';

const Result = ({ score }) => {
  const history = useHistory();

  // useEffect(() => {
  //   if (!name) {
  //     history.push("/");
  //   }
  // }, [history]);

  return (
    <>
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button className='btn'
        variant="contained"
        color="primary"
        
        size="large"
        style={{ alignSelf: "center", marginTop: 20,borderRadius:'25px', height:'6vh'   }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
    {/* <img src={result} className="resultimg" alt="quiz app" /> */}
    <span className="resultimg"><img src={result2}  alt="quiz app" />
    
    </span>
    
    </>
  );
};

export default Result;
