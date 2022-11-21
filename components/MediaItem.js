import * as React from 'react';
import mediaStyles from '../styles/Item.module.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Modal, Rating } from '@mui/material';

import Image from 'next/image';
import vercelPic from '../public/vercel.svg';

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
  const [isLiked, setIsLiked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  }

  let button;
  if (isLiked) {
    button = <FavoriteIcon sx={{ color: red[500] }}/>;
  } else {
    button = <FavoriteBorderOutlinedIcon sx={{ color: red[500] }}/>;
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }} elevation={24} className={mediaStyles.card}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <MenuBookIcon />
            </Avatar>
          }
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
                <Card sx={style} className={mediaStyles.card}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <MenuBookIcon />
                      </Avatar>
                    }
                    action={
                      <>
                        <IconButton aria-label="close" onClick={handleClose}>
                          <CloseIcon />
                        </IconButton>
                      </>
                    }
                    title="The Adventures of the Yeti"
                    subheader="Author: The Yeti"
                  />
                  {/* <CardMedia
                    component="img"
                    height="194"
                    image="[yeti_image]"
                    alt="Yeti"
                  /> */}
                  <Image src={vercelPic}
                  alt='vercelTest'
                  />
                  <CardContent>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      INCLUDE EVEN MORE DETAILS IN THE MODAL! Release dates, sequals, ect..
                    </Typography>
                  </CardContent>
                </Card>
              </Modal>
            </>
          }
          title="The Adventures of the Yeti"
          subheader="Author: The Yeti"
        />
        {/* <CardMedia
          component="img"
          height="194"
          image={yeti_image}
          alt="Yeti"
        /> */}
        <Image src={vercelPic}
        alt='vercel test'
        />
        <CardContent>
          <Rating name="read-only" value={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            MEDIA DESCRIPTION GOES HERE
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="body2" color="text.secondary">
            Add to favorites
          </Typography>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
            {button}
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
