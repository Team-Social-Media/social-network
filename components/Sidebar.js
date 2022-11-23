import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import MovieIcon from '@mui/icons-material/Movie';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


function Sidebar({ setData }) {
  // const [show, setShow] = useState(false);
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
      <Stack sx={{ height: '88vh', top: '10vh', width: '13vw', left: '.05%', backgroundColor: '#2F3C7E', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '20px', textAlign: 'center' }}>

        <h1>Browse Media</h1>
        <Box sx={{}}>
          <Typography variant='h5'>
            <IconButton size="large" sx={{ mr: 2 }} onClick={() => setMedium('movies')}> <MovieIcon />
              <Typography sx={{ color: '#FBEAEB' }}>Movies</Typography>
            </IconButton>
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

          <Box sx={{}}>
            <Typography variant='h5'>
              <IconButton size="large" sx={{ mr: 2 }} onClick={() => setMedium('books')}>
                <LocalLibraryIcon />
              <Typography sx={{ color: 'whitesmoke' }}>Books</Typography>
              </IconButton>
            </Typography>
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
          </Box>
          <Typography variant='h5'>
              <IconButton size="large" sx={{ mr: 2 }} onClick={() => setMedium('songs')}>
                <LibraryMusicIcon />
              <Typography sx={{ color: 'whitesmoke' }}>Songs</Typography>
              </IconButton>
            </Typography>
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
      </Stack>
    </>
  )
}

export default Sidebar;
