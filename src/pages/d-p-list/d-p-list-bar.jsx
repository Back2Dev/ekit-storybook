import React from 'react'
import { Box, IconButton, ListItemButton, Typography, Link, Breadcrumbs, List, ListItemText, MenuItem, Menu } from '@mui/material'
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import DPListContext from './d-p-list-provider';

import { participantData } from '../../moca_data'

const DPLBar = () => {

  const { infoButton, setInfoButton } = React.useContext(DPListContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  const options = [
    'List',
    'Card'
  ];

  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
    
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInfoClick = () => {
    setInfoButton(!infoButton);
    console.info({infoButton});
  }

  return (
    <Box bgcolor="#092b58" display='flex' alignItems='center' justifyContent="space-between" height='45px' paddingLeft='10px'>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" color="secondary" separator={<NavigateNextIcon fontSize="small" />}>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="secondary"
            // href="/material-ui/getting-started/installation/"
          >
            Workshops
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="secondary"
            // href="/material-ui/getting-started/installation/"
          >
            One-Workshop
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="secondary"
            // href="/material-ui/getting-started/installation/"
          >
            {participantData[0].name}
          </Link>
        </Breadcrumbs> 
      </div>

      <Box height= '40px' display='flex' alignItems='center' paddingRight='10px'>
        {/* View */}
        <List component="nav" aria-label="Device settings">
          <ListItemButton
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="Views"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText secondary={<Typography color="secondary" display="flex" alignItems='center' ><ViewListRoundedIcon />-View</Typography>}/>
          </ListItemButton>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <IconButton size="small" color="secondary" aria-label="info" onClick={handleInfoClick}>
          <InfoOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default DPLBar