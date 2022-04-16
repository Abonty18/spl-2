import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main:{
    backgroundColor:'#ffffff',
  },
  media: {
    
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '15px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    backgroundColor: '#d0e8ff',
    display: 'flex',
    borderRadius: '15px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  rposts: {
    backgroundColor:'F6FCFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '50vm',
    position: 'relative',
    wordWrap:'break-word',
    width:'18%',
    padding: '20px',
  },
  loadingPaper: {
    backgroundColor: '#ebe4ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width:'50vh'
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));
