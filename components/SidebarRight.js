import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function SidebarRight() {

  return (
    <>

      <Stack sx={{ height: '88vh', top: '10vh', paddingLeft: '20px', width: 'auto', backgroundColor: '#668F80', position: 'fixed', boxShadow: '5px 5px 5px grey', flexGrow: 1, borderRadius: '15px 5px 15px 15px', padding: '5px', textAlign: 'center' }}>
        <Box sx={{ flexGrow: 1,  }}>
          <h1>Right Sidebar</h1>

          <h2>Whats New in the Media</h2>

          <h2>Suggested Friends</h2>
        </Box>

        <Box sx={{ display: 'flex', paddingLeft: '20px' }}>
          <h5> &copy;Social Media</h5>
        </Box>
      </Stack>
    </>
  )
}

export default SidebarRight;