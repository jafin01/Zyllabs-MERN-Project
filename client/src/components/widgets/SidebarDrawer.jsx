/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiProgression } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { Badge } from '@mui/icons-material';
import { FaUserGraduate } from 'react-icons/fa';
import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import ListItemContainer from '../../constants/schoolConstants/listVariants';

const drawerWidth = 240;

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ListMotion = motion(List);
const ListItemMotion = motion(ListItem);

function SidebarDrawer({ pageType, onPageChange }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
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

export default SidebarDrawer;
