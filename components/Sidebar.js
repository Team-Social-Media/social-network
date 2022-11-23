import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { green, blue, deepPurple, red, black } from '@mui/material/colors';

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
      <Stack sx={{ height: '88vh', top: '10vh', width: '10%', left: '.05%',backgroundColor: '#2F3C7E', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '15px', textAlign: 'center'}}>
          <h3>Browse Media</h3>
          <Box sx={{ textAlign: 'center'}}>
            <Typography variant='h5'>
              <Button sx={{ backgroundColor: 'black', fontWeight: 'bold' }} variant="contained" size="small" onClick={() => setMedium('movies')}><LiveTvIcon />&nbsp; Movies</Button>
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
            <Typography variant='h5'>
              <Button sx={{ backgroundColor: 'black', fontWeight: 'bold' }} variant="contained" size="small" onClick={() => setMedium('books')}><MenuBookIcon />&nbsp; Books</Button>
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
            <Typography variant='h5'>
              <Button sx={{ backgroundColor: 'black', fontWeight: 'bold' }} variant="contained" size="small" onClick={() => setMedium('music')}><LibraryMusicIcon />&nbsp; Songs</Button>
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
