
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    
  },
  paper: {
    backgroundColor:'#f6f2ff',
    padding: theme.spacing(2),
    borderRadius:'20px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    
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
    padding:'5px'
  },
  clear: {
    marginBottom: 10,
    borderRadius:'20px',
    padding:'7px',
    backgroundColor:'#fc727e',

    '&:hover': {
      backgroundColor: '#e95460',
      },
    

  },
  
  
}));
