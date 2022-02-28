import React from 'react';
const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: '550px',
        height:'40px',
        padding: 2,
        borderRadius:'20px',
        marginBottom: 10,
       
        backgroundColor: "#ff8993",
        textAlign: "center",
        justifyContent:'center',
        color: "white",
        textTransform: "capitalize",
        fontSize:'25px',
        fontWeight:'bold',
        fontFamily: 'Open Sans Condensed', 
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
