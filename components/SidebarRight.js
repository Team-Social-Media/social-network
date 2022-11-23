import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar';
import { Paper, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function SidebarRight() {

  const axios = require('axios');
  const env = require('env');

  let MOVIE_API = process.env.NEXT_PUBLIC_MOVIE_API;
  let MOVIE_Key = process.env.NEXT_PUBLIC_MOVIE_Key;

  // async function getData() {
  //   try {
  //     return await axios.get(url)
  //       .then(response => {
  //         return response.data.items.slice(0, 10).map(result => (
  //           ({
  //             medium: 'movie',
  //             id: result.id,
  //             title: result.title,
  //             directors: result.directors,
  //             stars: result.stars,
  //             rating: result.contentRating,
  //             genres: result.genres,
  //             image: result.image,
  //             plot: result.plot,
  //           })
  //         ));
  //       })
  //   } catch (error) {
  //     console.error('Error in SidebarRight.js: ', error)
  //   }
  // }

  let exampleData = {
    directors: "Ryan Coogler",
    genres: "Action, Adventure, Drama",
    id: "tt9114286",
    image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
    medium: "movie",
    plot: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    rating: "PG-13",
    stars: "Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke",
    title: "Black Panther: Wakanda Forever",
  }

  return (
    <>

      <Stack sx={{ height: '88vh', top: '10vh', paddingLeft: '20px', minWidth: '5vw', backgroundColor: '#2F3C7E', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '15px 5px 15px 15px', textAlign: 'center' }}>
        <Box sx={{ flexGrow: 1,  padding: '1px'}}>
          <h1>Right Sidebar</h1>

          <h2>Whats New in the Media</h2>

          <h2>Suggested Friends</h2>
        </Box>

        <Box sx={{ display: 'flex', paddingLeft: 'auto' }}>
          <h5> &copy;Social Media</h5>
        </Box>
      </Stack>



      
    </>
  )
}

export default SidebarRight;