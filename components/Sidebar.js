import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sidebarStyles from '../styles/Sidebar.module.css';


function Sidebar() {

  return (
    <>
      <React.Fragment>
        <Grid container spacing={0} sx={{}}>
          <Grid item xs={12} sx={{ height: '100' }}>
            <Box className={sidebarStyles.sidebar} sx={{height: '100vh'}}>
              <ButtonGroup orientation='vertical' variant='text'>
                <Button>
                  Movies
                </Button>
                <Button>
                  Books
                </Button>
                <Button>
                  Songs
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  )
}

export default Sidebar;