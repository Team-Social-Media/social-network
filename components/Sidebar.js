import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Card, CardMedia } from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MovieIcon from '@mui/icons-material/Movie';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Image from 'next/image';


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

      <Stack sx={{ height: '88vh', top: '10vh', width: '13vw', left: '.05%', backgroundColor: '#2F3C7E', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '20px', textAlign: 'center' }}>

        <h3>Browse Media</h3>
        <Box sx={{ flexGrow: '1' }}>
          <Typography variant='h5'>
            <IconButton size="large" sx={{ mr: 2 }} onClick={() => setMedium('movies')}> <MovieIcon />
              <Typography sx={{ color: '#FBEAEB' }}>&nbsp;&nbsp;&nbsp;Movies</Typography>
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

          <Box sx={{ flexGrow: '1' }}>
            <Typography variant='h5'>
              <IconButton size="large" sx={{ mr: 2 }} onClick={() => setMedium('books')}>
                <LocalLibraryIcon />
                <Typography sx={{ color: 'whitesmoke' }}>&nbsp;&nbsp;&nbsp;Books</Typography>
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

          <Box sx={{ flexGrow: '1' }}></Box>
          <Typography variant='h5'>
            <IconButton size="large" sx={{ mr: 2 }} onClick={() => setMedium('music')}>
              <MusicNoteIcon />
              <Typography sx={{ color: 'whitesmoke' }}>&nbsp;&nbsp;&nbsp;Songs</Typography>
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
          <Box sx={{ display: 'flex', position: 'sticky', padding: '25px', mt: '120%' }}>
            <Image
              src='/derick-anies-hDJT_ERrB-w-unsplash.jpg'
              alt='login intro photo'
              width={200}
              height={240}
            />
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default Sidebar;
