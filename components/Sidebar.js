import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Sidebar() {

  return (
    <>
      <Container sx={{ height: '100%', width: '100%', backgroundColor: 'gray' }}>
        <div>
          <h1>Left Sidebar</h1>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant='h5'>Movies</Typography>
            <Typography variant='h5'>Books</Typography>
            <Typography variant='h5'>Songs</Typography>
          </Box>
        </div>
      </Container>

    </>
  )
}

export default Sidebar;