import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import classes from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <span className={classes['search-wrapper']}>
      <TextField
        sx={{
          '& fieldset': { border: 'none' },
        }}
        placeholder="Enter City"
        InputProps={{
          style: {
            color: 'white',
            fontSize: '1.1rem',
          },
        }}
        id="demo-helper-text-aligned"
        className={classes['search-box']}
      />
      <Button
        variant="contained"
        className={classes['search-button']}
        onClick={() => {}}
        sx={{
          color: 'white',
          backgroundColor: '#6c5dd3',
          borderRadius: '1rem',
          boxShadow: 'none',
        }}
        size="medium"
      >
        Add City
      </Button>
    </span>
  );
};

export default SearchBox;
