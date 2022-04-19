
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    
  },
  paper: {
    backgroundColor:'#ffffff',
    padding: theme.spacing(2),
    borderRadius:'20px',
    width:'90vh',
    height:'95vh'
  },
  paper1: {
    backgroundColor:'#ffffff',
    padding: theme.spacing(2),
    borderRadius:'20px',
    width:'90vh',
    height:'9.5vh'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height:'90vh'
    
    
  },
  message: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    height:'190vh'
    
    
  },
  fileInput: {
    width: '97%',
    margin: '4px',
    marginLeft:'7px',
    marginBottom:'6px'
    
  },
  buttonSubmit: {
    backgroundColor:'#6fa8dc',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#3d85c6',
      },
    marginBottom: '8px',
    borderRadius:'20px',
    padding:'0px',
    height:'6vh'
  },
  clear: {
    marginBottom: 10,
    borderRadius:'20px',
    padding:'0px',
    backgroundColor:'#fc727e',
    height:'6vh',
    '&:hover': {
      backgroundColor: '#e95460',
      },
    

  },
  
  
}));
