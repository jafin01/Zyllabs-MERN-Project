import {
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Typography,
  // useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DarkMode, ForumRounded, LightMode, Person2Rounded, WorkHistoryRounded,
} from '@mui/icons-material';
import FlexBetween from '../components/FlexBetween';

function Navbar() {
  // const [profileSelected, setProfileSelected] = useState(false);
  const [feedSelected, setFeedSelected] = useState(false);
  const [recentSelected, setResentSelected] = useState(false);
  const navigate = useNavigate();
  const PaperMotion = motion(Paper);
  const IconMotion = motion(IconButton);
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;

  return (
    <PaperMotion
      transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        opacity: 1,
        y: 12,
      }}
      sx={{
        margin: '1.5rem 7%',
        background: '#161b22',
        borderRadius: '30px',

      }}
      elevation={5}
    >
      <FlexBetween padding="1rem 6%">
        <FlexBetween gap="1.75rem">
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
        <FlexBetween gap={5} sx={{ alignItems: 'center' }}>
          <IconMotion
            onClick={() => {}}
            whileHover={{
              scale: 1.3,
              color: 'yellow',
            }}
          >
            {theme.palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: '#fff', fontSize: '25px' }} />
            )}
          </IconMotion>

          <IconMotion
            whileHover={{
              scale: 1.3,
              color: 'yellow',
            }}
          >
            <Person2Rounded sx={{
              color: '#fff',
              fontSize: '25px',
              '&:hover': {
                color: 'yellow',
              },
              '&:active': {
                color: '#00D5FA',
              },
            }}
            />
          </IconMotion>

          <IconMotion
            whileHover={{
              scale: 1.3,
              color: 'yellow',
            }}
            onClick={() => { setFeedSelected(true); }}
          >
            <ForumRounded sx={{
              color: feedSelected ? '#00D5FA' : '#fff',
              fontSize: '25px',
              '&:hover': {
                color: 'yellow',
              },
            }}
            />
          </IconMotion>

          <IconMotion
            whileHover={{
              scale: 1.3,
              color: 'yellow',
            }}
            onClick={() => { setResentSelected(true); }}
          >
            <WorkHistoryRounded sx={{
              color: recentSelected ? '#00D5FA' : '#fff',
              fontSize: '25px',
              '&:hover': {
                color: 'yellow',
              },
            }}
            />
          </IconMotion>

          <FormControl variant="standard" value="jafin">
            <Select
              value="Jafin"
              sx={{
                backgroundColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                padding: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value="Jafin">
                <Typography>Jafin</Typography>
              </MenuItem>
              <MenuItem>Log Out</MenuItem>
            </Select>
          </FormControl>

        </FlexBetween>
      </FlexBetween>

    </PaperMotion>
  );
}

export default Navbar;
