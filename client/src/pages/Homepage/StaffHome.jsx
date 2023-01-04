import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
  // Paper,
  useTheme,
} from '@mui/material';
import {
  ForumRounded,
  Person2Rounded,
  WorkHistoryRounded,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';

function StaffHome() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate();
  const background = theme.palette.background.default;
  // const neutralDark = theme.palette.neutral.light;
  // const { alt } = theme.palette.background;
  // const neutralLight = theme.palette.primary.light;

  return (
    <Box>

      <Paper
        sx={{
          margin: '1.5rem 7%',
          background: '#161b22',
          // border: `0.5px solid ${neutralLight}`,
          borderRadius: '30px',
        }}
        elevation="5"
      >
        <FlexBetween padding="1rem 6%">
          <FlexBetween>
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 2rem, 2.25rem)"
              color="primary"
              onClick={() => navigate('/staff/home')}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              Zyllabs

            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography>
              hi
            </Typography>
          </FlexBetween>
        </FlexBetween>

      </Paper>

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
    </Box>
  );
}

export default StaffHome;
