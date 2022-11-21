import * as React from 'react';
import mediaStyles from '../styles/Item.module.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Rating } from '@mui/material';

import Image from 'next/image';
import vercelPic from '../public/vercel.svg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MediaItem() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <>
      <Card sx={{ maxWidth: 345 }} elevation={24} className={mediaStyles.card}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="The Adventures of the Yeti"
          subheader="Author: The Yeti"
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="{yeti_image}"
          alt="Yeti"
        /> */}
        <Image src={vercelPic}
        alt='vercel test'
        />
        <CardContent>
          <Rating name="read-only" value={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            I just finished this book last week! I really enjoyed it. However I am unsure about the character development with the Yeti.. any thoughts?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="text">Comment</Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments:</Typography>
            <Typography paragraph>
              This is awesome!
            </Typography>
            <Typography paragraph>
              I loved this book, what did you think of chapter 12?
            </Typography>
            <Typography paragraph>
              This book sucks
            </Typography>
            <Typography>
              The Yeti was my favorite character!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }} elevation={24} className={mediaStyles.card}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="The Adventures of the Yeti"
          subheader="Author: The Yeti"
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/yeti.jpg"
          alt="Yeti"
        /> */}
        <Image src={vercelPic}
        alt = "vercel test"
        />
        <CardContent>
          <Rating name="read-only" value={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            I just finished this book last week! I really enjoyed it. However I am unsure about the character development with the Yeti.. any thoughts?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="text">Comment</Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments:</Typography>
            <Typography paragraph>
              This is awesome!
            </Typography>
            <Typography paragraph>
              I loved this book, what did you think of chapter 12?
            </Typography>
            <Typography paragraph>
              This book sucks
            </Typography>
            <Typography>
              The Yeti was my favorite character!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
