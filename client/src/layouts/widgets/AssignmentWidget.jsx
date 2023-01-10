import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import WidgetWrapper from '../../components/WidgetWrapper';

function AssignmentWidget() {
  return (
    <WidgetWrapper
      sx={{ height: '190px' }}
    >
      <Box display="flex" justifyContent="center" pb={3}>
        <Typography variant="h3">
          Assignments
        </Typography>
      </Box>

      <Divider />

      <Box display="flex" justifyContent="center" p="1rem 0">
        <Typography>
          Add assignments here
        </Typography>
      </Box>

    </WidgetWrapper>

  );
}

export default AssignmentWidget;
