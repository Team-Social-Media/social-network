import * as React from 'react';
import mediaStyles from '../styles/Item.module.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, Modal, Rating } from '@mui/material';
import { green, blue, deepPurple, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Image from 'next/image';

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

export default function FavItem({ item }) {
  const [value, setValue] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLikeClick = () => {
    // handleFavorites(item);
    setIsLiked(!isLiked);
  }

  const icon = () => {
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

  const itemImage = () => {
    if (!item.image) {
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
          avatar={icon()}
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
                    avatar={icon()}
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
                    {itemImage()}
                  </CardMedia>
                  {/* <CardContent>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      USERS CAPTION/NOTES GO HERE
                    </Typography>
                  </CardContent> */}
                </Card>
              </Modal>
            </>
          }
          title={item.title}
          subheader={item.author}
        />
        <CardMedia sx={{ display: 'flex', justifyContent: 'center' }}>
          {itemImage()}
        </CardMedia>
        <CardContent>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          {/* <Typography variant="body2" color="text.secondary">
            USERS CAPTION/NOTES GO HERE
          </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick} >
            {button}
          </IconButton>
          {/* <IconButton aria-label="delete">
            Remove from favorites <DeleteIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </>
  );
}
