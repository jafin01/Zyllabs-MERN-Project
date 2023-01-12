import { Box, Divider } from '@mui/material';
import React from 'react';
import WidgetWrapper from '../WidgetWrapper';

function UserWidget() {
  return (
    <WidgetWrapper>
      <Box display="flex" justifyContent="center" pb={3}>
        <Box
          width={150}
          height={150}
        >
          <img
            style={{ objectFit: 'cover', borderRadius: '50%' }}
            width={150}
            height={150}
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuS4q9gPpC3J0mYiARB4gNfrwx3QHNglobOpDduKih&s"
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" p="1rem 0">
        Jafin Jahfar
      </Box>

      <Divider />
    </WidgetWrapper>
  );
}

export default UserWidget;
