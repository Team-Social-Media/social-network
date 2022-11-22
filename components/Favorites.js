import { Box, Button, Dialog, Modal, Typography } from "@mui/material";
import { useState } from "react";

const Favorites = ({item, setIsLiked}) => {

  console.log(item)

  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function toggleFavorite(newItem) {
    getFavorites();

    const items = favorites.map(item => {
      
      // need to generate a unique id somehow
      // so we can avoid adding duplicates or just change
      // based on isLiked or not

      if (newItem.id !== item.id) {
        setFavorites([newItem, ...favorites]);
        setIsLiked(true)

      } else {
        openDialog();
      }
      
    });
    
    // rough draft of adding to database

    // const {item} = favorites;

    // pool.query('INSERT INTO favorites (item) VALUE RETURNING *', [favorites],
    // (err, results) => {
    //   if (err) {
    //     throw err
    //   }
    //   response.status(201).send(`Favorite added with id: ${res.rows[0].id}`);
    // });
  }

  // rough draft of database pull

  // async function getFavorites(req, res){
  //  pool.query('SELECT * FROM favorites ORDER BY id ASC', (err, results) => {
  //   if (err){
  //     throw err
  //   }
  //   setFavorites(res.rows)
  // })

  function openDialog(){
    return (
      <Dialog 
      open={!open}
      onClose={handleClose}>
        <Box sx={style}>
          <Typography id='delete-dialog-title' variant='h6' component='h2'>
            Please confirm that you want to remove this item from your favorites.
          </Typography>
          <Button onClick={removeFavorite(newItem)}>
            Yes
          </Button>
          <Button onClick={handleClose}>
            No
          </Button>
        </Box>
      </Dialog>
    )
  }

  async function removeFavorite(newItem){
    setIsLiked(false)

    const items = favorites.filter(item => item._id !== newItem.id);
    setFavorites(items);
  }

  toggleFavorite(item);
}

export default Favorites;