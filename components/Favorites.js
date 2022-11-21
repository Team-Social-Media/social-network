import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Favorites = ({ setIsLiked, isLiked}) => {

  const [favorites, setFavorites] = useState([]);
  // const [isFavorite, setIsFavorite] = useState()

  async function toggleFavorite(newItem) {
    getFavorites();

    let config = {
      baseUrl: 'http://localhost:3000',
      url: 'api/favorites',
      method: 'get',
    }

    const items = favorites.map(item => {
      
      if (newItem.id !== item.id) {
        setFavorites([newItem, ...favorites]);
        setIsLiked(true)

      } else {
        confirmRemove(newItem);
      }
    });
    await axios(config);
  }

  async function getFavorites(){
    let config = {
      baseUrl: 'http://localhost:3000',
      url: 'api/favorites',
      method: 'get',
    }
    let res = await axios(config);
    setFavorites(res.data.results);
  }

  async function confirmRemove(item){
    return (
      <Modal 
      open={open}
      onClose={handleClose}>
        <Box sx={style}>
          <Typography id='delete-modal-title' variant='h6' component='h2'>
            Please confirm that you want to remove this item from your favorites.
          </Typography>
          <Button onClick={removeFavorite(item)}>
            Yes
          </Button>
          <Button onClick={handleClose}>
            No
          </Button>
        </Box>
      </Modal>
    )
  }
  
  async function removeFavorite(item){
    setIsLiked(false)
    

  }
}

export default Favorites;