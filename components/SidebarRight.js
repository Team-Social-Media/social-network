import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar';
import { Paper, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SidebarRight() {

  return (
    <>

      <Stack sx={{ height: '88vh', top: '10vh', width: '13vw', paddingLeft: '20px', backgroundColor: '#2F3C7E', right: '.05%', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '20px', textAlign: 'center', paddingRight: '15px' }}>
        <Paper
          component="form"
          sx={{ borderRadius: '10px', display: 'flex', alignItems: 'center', width: 'auto', mt: '10px' }}
        >
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Search Website"
          />
          <IconButton type="button" sx={{}} aria-label="search" onClick={() => buttonClick('title')}>
            <SearchIcon />
          </IconButton>
        </Paper>

        <Box sx={{ flexGrow: 2, }}>
          <Box sx={{ backgroundColor: '#FBEAEB', height: '50%', width: 'auto', borderRadius: '10px',  }}>
            <Box sx={{padding: '1px', mt: '20px' }}>
              <h2>Whats New in the Media</h2>
            </Box>
            <Typography> Kris </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#FBEAEB', height: '40%', width: 'auto', borderRadius: '10px',  }}>
            <Box sx={{ padding: '1px', mt: '20px' }}>
              <h2>Suggested Friends</h2>
            </Box>
            <Typography> Kris </Typography>
            <Typography> Hayden </Typography>
            <Typography> KC </Typography>
            <Typography> Isaiah </Typography>
            <Typography> Jun </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', paddingLeft: 'auto' }}>
          <h5> &copy;Social Media</h5>
        </Box>
      </Stack>
    </>
  )
}

export default SidebarRight;