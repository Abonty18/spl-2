// import './Landing.css';
// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// function Landing() {
//   return (
//     <React.Fragment>
//       <div className='body'>
//         {/* <h1 className='text-center text-danger text-capitalize my-5 font-size'>Hobbyists</h1> */}
//         <div className="container">
//           <div className="row">
//             <div className="col-sm"> <div class="card">
//               <img src="https://media.istockphoto.com/photos/blog-and-information-website-concept-workplace-background-with-text-picture-id1130150680?k=20&m=1130150680&s=612x612&w=0&h=xS0ephM0yuIC3ploNT4CbbOoZmZ8fxQNJlrB4yPJC9k=" class="card-img-top" alt="..." height="250px" />
//               <div class="card-body">
//                 <a href="/posts" class="btn btn-primary">Blog</a>
//               </div>
//             </div></div>
//             <div className="col-sm"> <div class="card">
//               <img src="https://blog.hubspot.com/hubfs/google-quiz.jpg" class="card-img-top" alt="..." height="250px" />
//               <div class="card-body">
//                 <a href="/QuizHome" class="btn btn-primary">Quiz</a>
//               </div>
//             </div></div>
//             <div className="col-sm"><div class="card">
//               <img src="https://image.shutterstock.com/image-illustration/articles-complex-like-puzzle-pictured-260nw-1666818295.jpg" class="card-img-top" alt="..." height="250px" />
//               <div class="card-body">
//                 <a href="Blogs" class="btn btn-primary">Publish Blog</a>
//               </div>
//             </div></div>
//             <div className="col-sm"><div class="card">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPx9lnPkuIF5UiXTEDFTAiPWVDxgeTOXrLS5w_THHswFZf5SG7RST5_oalMQwTsvsXzg&usqp=CAU" class="card-img-top" alt="..." height="250px" />
//               <div class="card-body">
//                 <a href="Dashboard" class="btn btn-primary">Resources</a>
//               </div>
//             </div></div>

//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Landing;


import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import searchh from '../../images/search.gif';
import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import QuizHome from '../QuizHome/QuizHome'
// import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Landing = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();
 const theme=createMuiTheme({
  
   typography:{fontSize: 12,
    fontFamily: [
      'Fira Sans Condensed', 
      'sans-serif',
      
    ].join(','),
   }

 });
  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
   <ThemeProvider theme={theme}>
    <Grow in  >
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9} >
            {/* <Posts setCurrentId={setCurrentId} /> */}
            <img  src={searchh} className="banner"  alt="quiz app" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Blogs by Title" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Blogs by Tags"
                variant="outlined"
               
              />
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
           
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </ThemeProvider>
    
  );
};

export default Landing;
