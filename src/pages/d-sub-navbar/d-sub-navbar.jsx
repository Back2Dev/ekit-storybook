import React from 'react'
import { Box, IconButton, ListItemButton, Typography, Link, Breadcrumbs, List, ListItemText, MenuItem, Menu } from '@mui/material'
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import DesktopContext from '../d-provider/d-provider';

import { participantData, listData, wsData } from '../../moca_data'

const DSNavbar = (props) => {

  const { infoButton, setInfoButton, pageNavData, setPageNavData, pageNow, setPageNow } = React.useContext(DesktopContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndex1, setSelectedIndex1] = React.useState(0);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);

  const options = [ 'Select All', 'Workshop 2.5', 'In-house', 'Archived' ];
  const options1 = [ 'List', 'Card' ];

  const handleInfoClick = () => {
    setInfoButton(!infoButton);
    console.info({infoButton});
  }
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickListItem1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleMenuItemClick1 = (event, index) => {
    setSelectedIndex1(index);
    setAnchorEl1(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleLinkClick = (index) => (event) => {
    if (index === 0){
      setPageNavData({title: ['Workshops'], data: listData})
      setPageNow('workshops');
    } else if (index === 1){
      setPageNavData({title: ['Workshops', 'One-Workshop'], data: wsData})
      setPageNow('workshopPagep');
    } else if (index === 2){
      setPageNavData({title: ['Workshops', 'One-Workshop', 'Participant'], data: participantData})
      setPageNow('participant');
    } else if (index === 3){
      setPageNavData({title: ['Workshops', 'One-Workshop', 'Participant', 'Form'], data: participantData[0]})
      setPageNow('form');
    }
  }
  console.log({pageNavData})

  return (
    <Box bgcolor="#092b58" display='flex' alignItems='center' justifyContent="space-between" height='45px' paddingLeft='10px'>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" color="secondary" separator={<NavigateNextIcon fontSize="small" />}>
          {pageNavData.title.map((t, index) => {
            return (
              <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="secondary" key={index} onClick={handleLinkClick(index)}>
                {t}
              </Link>
            )
          })}
          
          {/* <Link
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
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="secondary"
            // href="/material-ui/getting-started/installation/"
          >
            {participantData[0].forms[0].f_name}
          </Link> */}
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
        <Box hidden={pageNow !== 'workshops' && typeof pageNow !== 'undefined'}>
          {/* Filter */}
          <List component="nav" aria-label="Device settings">
            <ListItemButton
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="Filter"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText secondary={<Typography color="secondary" display="flex" alignItems='center' ><FilterAltOutlinedIcon />-Filter</Typography>}/>
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
        </Box>
        <Box hidden={pageNow === 'workshops' || typeof pageNow === 'undefined'}>
          <IconButton size="small" color="secondary" aria-label="info" onClick={handleInfoClick}>
            <InfoOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default DSNavbar