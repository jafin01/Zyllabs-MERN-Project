import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from '../../layouts/Navbar';
import BottomNavigation from '../../layouts/BottomNavigation';

function StaffHome() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  // const neutralDark = theme.palette.neutral.light;
  // const { alt } = theme.palette.background;
  // const neutralLight = theme.palette.primary.light;

  return (
    <Box>
      { isNonMobile
        ? <Navbar />
        : <BottomNavigation />}
    </Box>
  );
}

export default StaffHome;
