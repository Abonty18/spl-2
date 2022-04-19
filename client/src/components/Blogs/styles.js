import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  main:{
    backgroundColor: '#234E63',
  },
  banner: {
    height: '55%',
    alignSelf:'center',
    padding: '0px',
    overflow:'hidden'
  },

 
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    padding:'9px 9px 1px 1px'
    
  },
}));
