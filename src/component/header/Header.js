import React from 'react';
import {AppBar, Box, Toolbar, Typography , Button, Container} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
//import AdminDashboard from '../admin/AdminDashboard';

import {Link} from "react-router-dom";


const Header = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}
          >Employee Mannagement System        
          </Typography>


          <Box justifyContent="flex-end" alignItems="flex-end" sx={{ flexGrow: 0 }}>
            

            <Link to='/admin' style={{ textDecoration: 'none' }}>
                  <Button 
                    sx={{ height:40, my: 2, fontWeight: 800, color: 'white', display: 'block',
                    }}>
                        Admin 
                  </Button>
            </Link>
              
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;