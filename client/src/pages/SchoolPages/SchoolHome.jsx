import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import SidebarDrawer from '../../components/widgets/SidebarDrawer';
import Classes from '../../layouts/schoolLayouts/Classes';
import Performance from '../../layouts/schoolLayouts/Performance';
import Staffs from '../../layouts/schoolLayouts/Staffs';
import Students from '../../layouts/schoolLayouts/Students';
import Sidebar from '../../layouts/Sidebar';

function SchoolHome() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const [pageType, setPageType] = useState('performance');

  const changePageType = (type) => {
    setPageType(type);
  };

  return (
    <Box display={isNonMobile ? 'flex' : 'block'}>
      <Box>
        {isNonMobile && <Sidebar width="20%" pageType={pageType} onPageChange={changePageType} />}
        {!isNonMobile && <SidebarDrawer pageType={pageType} onPageChange={changePageType} />}
      </Box>
      <Box margin={isNonMobile ? '2rem 2rem 0 2rem' : '5rem 1rem 0 0.5rem'} width="95%">
        { pageType === 'performance' && <Performance />}
        { pageType === 'classes' && <Classes />}
        { pageType === 'students' && <Students />}
        { pageType === 'staffs' && <Staffs />}
      </Box>
    </Box>
  );
}

export default SchoolHome;
