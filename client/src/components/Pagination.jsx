/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import {createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { getPosts } from '../actions/posts';
import useStyles from './styles';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const theme = createMuiTheme({

    typography: {
      fontFamily: [
        'Fresca', 
      'sans-serif'
      ].join(','),
    }

  });

  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        classes={{ ul: classes.ul }}
        count={numberOfPages}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )}
      />
      </ThemeProvider>
      );
};

      export default Paginate;
