import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from '@mui/material';
import {
  ForumRounded,
  Person2Rounded,
  WorkHistoryRounded,
} from '@mui/icons-material';

function BottomNavigationBar() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const background = theme.palette.background.default;

  return (
    <BottomNavigation
      sx={{
        backgroundColor: { background },
        position: 'fixed',
        bottom: 5,
        left: 0,
        right: 0,
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Profile" icon={<Person2Rounded />} />
      <BottomNavigationAction label="Feed" icon={<ForumRounded />} />
      <BottomNavigationAction label="Recent" icon={<WorkHistoryRounded />} />
    </BottomNavigation>
  );
}

export default BottomNavigationBar;
