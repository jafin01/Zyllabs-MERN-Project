/* eslint-disable react/prop-types */
import { Box } from '@mui/system';
import React from 'react';

function UserSnippetWidget({ size = '60px' }) {
  return (
    <Box
      width={size}
      height={size}
    >
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s"
      />
    </Box>
  );
}

export default UserSnippetWidget;
