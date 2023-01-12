import { Box } from '@mui/material';
import React from 'react';
import PostWidget from '../components/widgets/PostWidget';
import QnPostWidget from '../components/widgets/QnPostWidget';

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
