import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Feed from '../../layouts/Feed';
import Navbar from '../../layouts/Navbar';
import Profile from '../../layouts/Profile';
import Recent from '../../layouts/Recent';
import BottomNavigation from '../../layouts/BottomNavigation';
import DrawerWidget from '../../layouts/widgets/DrawerWidget';

function StudentHome() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const theme = useTheme();
  // const navigate = useNavigate();
  const [pageType, setPageType] = useState('profile');

  const pageTypeHandler = (type) => {
    setPageType(type);
  };

  return (
    <Box>
      { !isNonMobile && pageType === 'feed' && (
        <Box sx={{ background: theme.palette.background.alt, paddingBottom: '2.5rem' }}>
          <DrawerWidget />
        </Box>
      )}
      { isNonMobile && <Navbar onClick={pageTypeHandler} /> }

      {pageType === 'profile' && <Profile />}
      {pageType === 'feed' && <Feed />}
      {pageType === 'recent' && <Recent />}

      { !isNonMobile && <BottomNavigation onClick={pageTypeHandler} />}
    </Box>
  );
}

export default StudentHome;
