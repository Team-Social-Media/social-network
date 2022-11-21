import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

function Sidebar({ setData }) {
  const [medium, setMedium] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});
  const buttonClick = (queryString) => {
    fetch(`/api/${medium}?${queryString}=${searchQuery.value}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <>
      <Container sx={{ height: '100%', width: '100%', backgroundColor: 'gray' }}>
        <div>
          <h1>Browse Media</h1>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h5'>
              <button onClick={() => setMedium('movies')}>Movies</button>
            </Typography>
            {medium === 'movies' ? <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Movie Title"
                inputProps={{ 'aria-label': 'enter movie title' }}
                onChange={(e) => setSearchQuery({ value: e.target.value })}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => buttonClick('title')}>
                <SearchIcon />
              </IconButton>
            </Paper> : null}
            <Typography variant='h5'><button onClick={() => setMedium('books')}>Books</button></Typography>
            {medium === 'books' ? <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Book Title"
                inputProps={{ 'aria-label': 'enter book title' }}
                onChange={(e) => setSearchQuery({ value: e.target.value })}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => buttonClick('title')}>
                <SearchIcon />
              </IconButton>
            </Paper> : null}
            <Typography variant='h5'><button onClick={() => setMedium('music')}>Songs</button></Typography>
            {medium === 'music' ? <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Song Title"
                inputProps={{ 'aria-label': 'enter song title' }}
                onChange={(e) => setSearchQuery({ value: e.target.value })}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => buttonClick('search')}>
                <SearchIcon />
              </IconButton>
            </Paper> : null}
          </Box>
        </div>
      </Container>

    </>
  )
}

export default Sidebar;
