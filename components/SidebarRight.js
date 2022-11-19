import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SidebarRight() {

  return (
    <>
      <div>
        <h1>Right Sidebar</h1>

        <article>
          <h2>Whats New in the Media</h2>
        </article>
        <article>
          <h2>Suggested Friends</h2>
        </article>
      </div>
    </>
  )
}

export default SidebarRight;