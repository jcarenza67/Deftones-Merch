import React from "react";
import CartWidget from "./CartWidget";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)({
    zIndex: "1400",
    top: "0",
    backgroundColor: "black",
});

const CustomMenu = styled(Menu)({
  marginTop: "40px", // Adjust this value to set the desired margin
});

function Navbar({ cart }){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <React.Fragment>
    <Box sx={{ flexGrow: 1, width: "100%", }}>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Deftones Merch
          </Typography>
          <CartWidget cart={cart} />
        </Toolbar>
      </CustomAppBar>
    </Box>
    <CustomMenu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
      <MenuItem onClick={handleClose}>Home</MenuItem>
      <MenuItem onClick={handleClose}>Merch</MenuItem>
      <MenuItem onClick={handleClose}>About</MenuItem>
    </CustomMenu>
  </React.Fragment>
  );
}

export default Navbar;