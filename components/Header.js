import * as React from 'react';
import Nav from "./Nav";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, IconButton } from '@mui/material';
import Login from "./Login";
// import { FaFortAwesome } from "react-icons/fa";
// import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Image from 'next/image';


const Header = () => {

  return (
    <>
      <AppBar position="fixed" sx={{ flexGrow: 1, position: 'fixed', background: '#2F3C7E' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#4A6670"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Image
              src='/social-media.png'
              alt='Logo'
              width={55}
              height={50}
            />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Typography variant='h3'>Club Hub</Typography>
          </Typography>
          {/* <SearchBar /> */}
          <Nav />
          <Login />
        </Toolbar>
      </AppBar>

    </>
  )

}

export default Header;
