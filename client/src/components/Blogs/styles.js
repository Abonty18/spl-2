import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  main:{
    backgroundColor: '#234E63',
  },
  banner: {
    height: '55%',
    alignSelf:'center',
    padding: '0px'
  },

 
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    
  },
}));
