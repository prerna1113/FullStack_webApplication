
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit" >
            Home
          </Button>
          <Button color="inherit" >
            About
          </Button>
          <Button color="inherit" >
            Contact
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
