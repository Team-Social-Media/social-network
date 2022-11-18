import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Sidebar() {

  return (
    <>
      <React.Fragment>
        <Grid container spacing={0} sx={{}}>
          <Grid item xs={12} sx={{ height: '100' }}>
            <div className='sidebar-container' sx={{height: '100vh'}}>
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
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  )
}

export default Sidebar;