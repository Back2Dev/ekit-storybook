import React from 'react'
import { Box, IconButton, ListItemButton, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


// const options = [
//   'Workshop 2.5',
//   'In-house',
//   'Archived'
// ];

const options1 = [
  'List',
  'Card'
];

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function handleInfoClick() {
  console.info('You clicked info.');
}


const DWPBar = () => {

  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndex1, setSelectedIndex1] = React.useState(0);
  // const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  // const handleClickListItem = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClickListItem1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  // const handleMenuItemClick = (event, index) => {
  //   setSelectedIndex(index);
  //   setAnchorEl(null);
  // };

  const handleMenuItemClick1 = (event, index) => {
    setSelectedIndex1(index);
    setAnchorEl1(null);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <Box bgcolor="#092b58" display='flex' alignItems='center' justifyContent="space-between" height='45px' paddingLeft='10px'>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" color="secondary" separator={<NavigateNextIcon fontSize="small" />}>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="secondary"
            href="/material-ui/getting-started/installation/"
          >
            {/* <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
            Workshops
          </Link>
          <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="secondary"
          href="/material-ui/getting-started/installation/"
        >
          {/* <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          One-Workshop
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
            onClick={handleClickListItem1}
          >
            <ListItemText secondary={<Typography color="secondary" display="flex" alignItems='center' ><ViewListRoundedIcon />-View</Typography>}/>
          </ListItemButton>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose1}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options1.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex1}
              onClick={(event) => handleMenuItemClick1(event, index)}
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

export default DWPBar