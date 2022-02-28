import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor:'#f2ecff',

    borderRadius: '20px',
   
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '9px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    borderRadius:'20px',
    backgroundColor:'#fc727e',

    '&:hover': {
      backgroundColor: '#e95460',
      },




  },
  signin: {
    backgroundColor:'#6a329f',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#4e2674',
      },
    
    borderRadius:'20px'
  },
  hobbyists:{

    alignItems:'center',
    fontWeight:'bolder',
    fontSize:'33px',
    color:'#6a329f',
    fontFamily:'Bubblegum Sans', 

  },

  quiz:{

   alignItems:'center',
   fontWeight:'bolder',
    fontSize:'33px',
    color:'#6a329f',
    fontFamily:'Bubblegum Sans', 
    // border: '3px solid rgb(148, 113, 172)',
    // borderRadius:'20px'
    
      },
      resources:{

        alignItems:'center',
        fontWeight:'bolder',
         fontSize:'33px',
         color:'#6a329f',
         fontFamily:'Bubblegum Sans', 
         
           },

  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
