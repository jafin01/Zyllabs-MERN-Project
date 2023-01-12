import { Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import FeedLayout from './FeedLayout';
import SubjectDrawerWidget from '../components/widgets/SubjectDrawerWidget';

function Feed() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const BoxMotion = motion(Box);

  return (
    <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobile ? 'flex' : 'block'}
      gap="1rem"
      justifyContent="space-between"
    >
      { isNonMobile && (
        <BoxMotion
          flexBasis={isNonMobile ? '26%' : undefined}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <SubjectDrawerWidget />

        </BoxMotion>
      )}

      <BoxMotion
        width="100%"
        gap="1rem"
      >
        <BoxMotion
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <FeedLayout />
        </BoxMotion>
      </BoxMotion>
    </Box>
  );
}

export default Feed;
