import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function SidebarRight() {

  return (
    <>

      <Stack sx={{ height: '88vh', top: '10vh', width: '10%', paddingLeft: '20px', backgroundColor: '#2F3C7E',right: '.05%', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '15px', textAlign: 'center', paddingRight: '5px'  }}>
        <Box sx={{ flexGrow: 1}}>
          <h1>Right Sidebar</h1>

          <h2>Whats New in the Media</h2>

          <h2>Suggested Friends</h2>
        </Box>

        <Box sx={{ display: 'flex', paddingLeft: 'auto' }}>
          <h5> &copy;Social Media</h5>
        </Box>
      </Stack>
    </>
  )
}

export default SidebarRight;