import React from 'react'
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/Inbox';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ListOutlined from '@mui/icons-material/ListOutlined';
import Explore from '@mui/icons-material/Explore';
import Accessibility from '@mui/icons-material/Accessibility';
import Place from '@mui/icons-material/Place';
import LocalActivity from '@mui/icons-material/LocalActivity';
import Info from '@mui/icons-material/Info'; 
const menu = () => {
  return (
    <Box mt={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
      <Box position='fixed'>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AirplanemodeActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Plan Your Trip" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListOutlined />
            </ListItemIcon>
            <ListItemText primary="Things To do" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Explore/>
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Accessibility/>
            </ListItemIcon>
            <ListItemText primary="Facts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <ListItemText primary="Places" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalActivity />
            </ListItemIcon>
            <ListItemText primary="Tickets" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default menu
