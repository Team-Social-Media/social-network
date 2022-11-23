import Link from 'next/link'
import loginStyles from '../styles/Nav.module.css'
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Avatar, Button } from '@mui/material';


const Login = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    const handleClick = (e)=> {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const { data: session, status } = useSession();
    console.log(session)

    const user = session?.user;

    return (
        <>
            <login >

                <div sx={{ align: 'center', flexFlow: 'column wrap' }}>
                    {user && (
                        <>
                            <IconButton
                            onClick={handleClick}
                                size="small"
                                edge="start"
                                color="inherit"
                                display='box'
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <Avatar alt='avatar' src={session.user.image} sx={{ height:'50', width:'50'}}  />
                                </IconButton>

                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                {/* <MenuItem onClick={handleClose}>
                                <button onClick={() => signOut()} sx={{ align: 'center' }}>Sign Out</button>
                                </MenuItem> */}
                                <MenuItem onClick={() => signOut()} sx={{ align: 'center' }}>
                                Sign Out</MenuItem>

                            </Menu>

                        </>
                    )}

                    {!user && (
                        <>
                            <Button variant="contained" onClick={() => signIn()}>Sign In</Button>
                            {console.log(session)}
                        </>
                    )}
                </div>
            </login>

        </>
    )
}

export default Login;
