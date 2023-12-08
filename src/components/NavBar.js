import { AppBar, Avatar, styled, Badge, Typography } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import {Box} from '@mui/material'; 
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})


const NavBar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h5'>Tours</Typography>
        <Box sx={{display:'flex', alignItems:'center',gap:'20px'}}>
        <Badge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={2} color="error">
          <NotificationsActiveIcon color="action" />
        </Badge>
        <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=37" />
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar
