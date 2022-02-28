import { makeStyles } from '@material-ui/core/styles';
import signinl from '../../images/signin.jpg';
import signupl from '../../images/signup.jpg';

export default makeStyles((theme) => ({
  paper: {
    backgroundColor:'#f2ecff',
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius:"20px",

   
  },


  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    borderRadius:"10px"
  },
  submit: {
    backgroundColor:'#6a329f',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#4e2674',
      },
    margin: theme.spacing(3, 0, 2),
    borderRadius:"20px"
    
  },
  googleButton: {
    backgroundColor:'#6a329f',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#4e2674',
      },
    marginBottom: theme.spacing(1),
    borderRadius:"20px"
  },
  // already:{
  //   marginBottom:'0px',
  // },

 
}));
