import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  main:{
    backgroundColor: '#dacbff',
  },
  appBarSearch: {
    backgroundColor:'#f6f2ff',
    borderRadius: '20px',
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  
  searchButton: {
    backgroundColor:'#8855cf',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#644294',
      },
    borderRadius: '20px',
    // marginBottom: '1rem',
    display: 'flex',
    padding: '5px',
  },
  pagination: {
    borderRadius: 20,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
