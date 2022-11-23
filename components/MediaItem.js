import * as React from 'react';
import axios from 'axios';
import mediaStyles from '../styles/Item.module.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Modal, Rating } from '@mui/material';

import { green, blue, deepPurple, red } from '@mui/material/colors';

import userData, { favorites } from '../store/reducers/userData';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';


import Image from 'next/image';

const Chance = require('chance');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MediaItem(props) {


  const chance = new Chance();

  const item = props.item;
  // const handleFavorites = props.handleFavorites;

  console.log('mediaItem.js item: ', item)

  const [isLiked, setIsLiked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: session, status } = useSession();
    console.log('profile.js session: ', session)

  const user = {
    email: session.user.email,
    name: session.user.name,
    favorites: [],
    // id: '1549812a-8ec1-48ca-ba09-afed7af8e04b',
  }

  const dispatch = useDispatch();
  const userData  = useSelector(state => state.userData);
  console.log('#################', userData);

  const handleFavorites = (favItem) => {
    if(user.favorites.includes(favItem)) {
      let i = user.favorites.indexOf(favItem);
      user.favorites.splice(i, 1);
    } else {
      let newFavItem = {...favItem}
      newFavItem.id = chance.guid();
      console.log('!!!!!!!!!!!!!!!!!!!!',newFavItem);
      user.favorites.push(newFavItem);
    }
    console.log('user: ', user)
    console.log('user favorites: ', user.favorites)
    dispatch(favorites(user.favorites));
  }

  const handleLikeClick = async () => {

    handleFavorites(item);
    setIsLiked(!isLiked);
  }


  const icon = (item) => {
    if (item.medium === 'music') {
      return <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
        <LibraryMusicIcon />
      </Avatar>
    } else if (item.medium === 'book') {
      return <Avatar sx={{ bgcolor: deepPurple[500] }} aria-label="recipe">
        <MenuBookIcon />
      </Avatar>
    } else {
      return <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
        <LiveTvIcon />
      </Avatar>
    }
  }

  const itemImage = (item) => {
    if (!item.image || /undefined/gi.test(item.image)) {
      if (item.medium === 'book') {
        return <Image src='/book.png'
          alt='book'
          width={180}
          height={280}
        />
      } else if (item.medium === 'music') {
        return <Image src='/music.png'
          alt='music'
          width={180}
          height={280}
        />
      } else {
        return <Image src='/movie.png'
          alt='movie'
          width={180}
          height={280}
        />
      }
    } else {
      return <Image src={item.image}
        alt={item.title}
        width={200}
        height={280}
      />
    }
  }

  let button;
  if (isLiked) {
    button = <FavoriteIcon sx={{ color: red[500] }} />;
  } else {
    button = <FavoriteBorderOutlinedIcon sx={{ color: red[500] }} />;
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, justifyContent: "center" }} elevation={24} className={mediaStyles.card}>
        <CardHeader
          avatar={icon(item)}
          action={
            <>
              <IconButton aria-label="details" onClick={handleOpen}>
                <MoreVertIcon />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card sx={style} className={mediaStyles.card} position='relative'>
                  <CardHeader
                    avatar={icon(item)}
                    action={
                      <>
                        <IconButton aria-label="close" onClick={handleClose}>
                          <CloseIcon />
                        </IconButton>
                      </>
                    }
                    title={item.title}
                    subheader={item.author}
                  />
                  <CardMedia sx={{ display: 'flex', justifyContent: 'center' }}>
                    {itemImage(item)}
                  </CardMedia>
                </Card>
              </Modal>
            </>
          }
          title={item.title}
          subheader={item.author}
          sx={{ height: 92 }}
        />
        <CardMedia sx={{ display: 'flex', justifyContent: 'center' }}>
          {itemImage(item)}
        </CardMedia>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
            {button}
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            Add to favorites
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
