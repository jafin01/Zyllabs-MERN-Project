/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import { GiProgression } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaUserGraduate } from 'react-icons/fa';
// import MailIcon from '@mui/icons-material/Mail';
import { Badge } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import ListItemContainer from '../constants/schoolConstants/listVariants';

const drawerWidth = 240;
const TypographyMotion = motion(Typography);
const ListMotion = motion(List);
const ListItemMotion = motion(ListItem);

const drawerData = [
  {
    text: 'Performance',
    icon: <GiProgression fontSize={18} />,
  },
  {
    text: 'Classes',
    icon: <SiGoogleclassroom fontSize={18} />,
  },
  {
    text: 'Students',
    icon: <FaUserGraduate fontSize={18} />,
  },
  {
    text: 'Staffs',
    icon: <Badge />,
  },
];

export default function Sidebar({ pageType, onPageChange }) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: theme.palette.background.default,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ margin: '2rem 0 2rem 1.5rem' }}>
          <TypographyMotion
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate('/school/home')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Zyllabs

          </TypographyMotion>
        </Toolbar>
        <ListMotion
          sx={{ margin: '0 0 1.5rem 1rem' }}
          variants={ListItemContainer}
          initial="hidden"
          animate="visible"
        >
          {drawerData.map((data) => (
            <ListItemMotion
              variants={ListItemContainer}
              key={data.text}
              disablePadding
            >
              <ListItemButton
                onClick={() => onPageChange(data.text.toLowerCase())}
                sx={{ paddingBottom: '1rem', color: pageType === data.text.toLowerCase() ? theme.palette.primary.main : '' }}
              >
                <ListItemIcon>
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  primary={data.text}
                />
              </ListItemButton>
            </ListItemMotion>
          ))}
        </ListMotion>
      </Drawer>

    </Box>
  );
}
