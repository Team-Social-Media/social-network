import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function SidebarRight() {

  return (
    <>

      <Stack sx={{ height: '88vh', top: '10vh', paddingLeft: '20px', minWidth: '5vw', backgroundColor: '#2F3C7E', position: 'fixed', boxShadow: '5px 5px 5px grey', borderRadius: '15px 5px 15px 15px', textAlign: 'center' }}>
        <Box sx={{ flexGrow: 1,  padding: '1px'}}>
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