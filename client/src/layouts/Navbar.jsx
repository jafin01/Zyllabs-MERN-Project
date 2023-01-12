/* eslint-disable react/prop-types */
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DarkMode, ForumRounded, LightMode, Person2Rounded, WorkHistoryRounded,
} from '@mui/icons-material';
import FlexBetween from '../components/FlexBetween';
import { iconVariants, paperVariants } from '../constants/navVariants';

const PaperMotion = motion(Paper);
const IconMotion = motion(IconButton);
const FlexMotion = motion(FlexBetween);

function Navbar({ pageType, onClick }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;

  return (
    <PaperMotion
      variants={paperVariants}
      initial="hidden"
      animate="visible"
      sx={{
        margin: '1.5rem 7%',
        background: '#161b22',
        borderRadius: '30px',

      }}
      elevation={5}
    >
      <FlexMotion padding="1rem 6%">
        <FlexMotion gap="1.75rem">
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
        </FlexMotion>
        <FlexMotion gap={5} sx={{ alignItems: 'center' }}>
          <IconMotion
            variants={iconVariants}
            whileHover={{
              scale: 1.3,
            }}
            sx={{
              '&:hover': {
                color: 'yellow',
              },
            }}
            onClick={() => {}}
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
            }}
            sx={{
              '&:hover': {
                color: 'yellow',
              },
            }}
            // eslint-disable-next-line react/destructuring-assignment
            onClick={() => { onClick('profile'); }}
            variants={iconVariants}
          >
            <Person2Rounded
              sx={{
                color: pageType === 'profile' ? theme.palette.primary.main : '',
                fontSize: '25px',
              }}
            />
          </IconMotion>

          <IconMotion
            whileHover={{
              scale: 1.3,
            }}
            sx={{
              '&:hover': {
                color: 'yellow',
              },
            }}
            variants={iconVariants}
            onClick={() => { onClick('feed'); }}
          >
            <ForumRounded sx={{
              color: pageType === 'feed' ? theme.palette.primary.main : '',
              fontSize: '25px',
            }}
            />
          </IconMotion>

          <IconMotion
            whileHover={{
              scale: 1.3,
            }}
            sx={{
              '&:hover': {
                color: 'yellow',
              },
            }}
            variants={iconVariants}
            onClick={() => { onClick('recent'); }}
          >
            <WorkHistoryRounded sx={{
              color: pageType === 'recent' ? theme.palette.primary.main : '',
              fontSize: '25px',
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

        </FlexMotion>
      </FlexMotion>

    </PaperMotion>
  );
}

export default Navbar;
