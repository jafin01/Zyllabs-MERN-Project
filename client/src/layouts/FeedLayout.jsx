import { Box } from '@mui/material';
import React from 'react';
import PostWidget from './widgets/PostWidget';
import QnPostWidget from './widgets/QnPostWidget';

function FeedLayout() {
  return (
    <>
      <Box
        width="100%"
        height="auto"
      >
        <PostWidget />
        <QnPostWidget />
        <QnPostWidget />
        <QnPostWidget />
        <QnPostWidget />
      </Box>
    </>
  );
}

export default FeedLayout;
