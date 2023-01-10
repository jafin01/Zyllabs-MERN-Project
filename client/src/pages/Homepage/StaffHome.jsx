import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from '../../layouts/Navbar';
import BottomNavigation from '../../layouts/BottomNavigation';
import Profile from '../../layouts/Profile';
import Recent from '../../layouts/Recent';
import Feed from '../../layouts/Feed';

function StaffHome() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const [pageType, setPageType] = useState('profile');

  const pageTypeHandler = (type) => {
    setPageType(type);
  };
  // const neutralDark = theme.palette.neutral.light;
  // const { alt } = theme.palette.background;
  // const neutralLight = theme.palette.primary.light;

  return (
    <Box>
      { isNonMobile && <Navbar onClick={pageTypeHandler} /> }

      {pageType === 'profile' && <Profile />}
      {pageType === 'feed' && <Feed />}
      {pageType === 'recent' && <Recent />}

      { !isNonMobile && <BottomNavigation />}
    </Box>
  );
}

export default StaffHome;
