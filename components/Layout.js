import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Box from '@mui/material/Box'



const Layout = ({children}) => {
  return (
    <Box className="h-screen flex flex-row justify-start">
      <Header />
        {children}
      <Footer />
    </Box>
  )
}

export default Layout;
