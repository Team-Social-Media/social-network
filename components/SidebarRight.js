import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function SidebarRight() {

  return (
    <>

      <Container sx={{height: '100%', width: '100%', backgroundColor: 'blue'}}>
      <div>
        <h1>Right Sidebar</h1>
        <article>
          <h2>Whats New in the Media</h2>
        </article>
        <article>
          <h2>Suggested Friends</h2>
        </article>
      </div>

      </Container>
    </>
  )
}

export default SidebarRight;