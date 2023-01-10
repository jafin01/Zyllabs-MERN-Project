import {
  Box, Divider, Typography,
} from '@mui/material';
import React from 'react';
import WidgetWrapper from '../../components/WidgetWrapper';

function NoticeBoardWidget() {
  return (
    <WidgetWrapper
      sx={{ height: '185px' }}
    >
      <Box display="flex" justifyContent="center" pb={3}>
        <Typography variant="h3">
          Notice Board
        </Typography>
      </Box>

      <Divider />

      <Box display="flex" justifyContent="center" p="1rem 0">
        <Typography>
          this is notice board
        </Typography>
      </Box>

    </WidgetWrapper>
  );
}

export default NoticeBoardWidget;
