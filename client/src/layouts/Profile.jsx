import { useMediaQuery, Box } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import BadgeWidget from './widgets/BadgeWidget';
import NoticeBoardWidget from './widgets/NoticeBoardWidget';
import UserWidget from './widgets/UserWidget';
import AssignmentWidget from './widgets/AssignmentWidget';

function Profile() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const BoxMotion = motion(Box);

  return (
    <>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobile ? 'flex' : 'block'}
        gap="1.5rem"
        justifyContent="space-between"
      >

        <BoxMotion
          flexBasis={isNonMobile ? '26%' : undefined}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <UserWidget />
        </BoxMotion>

        <BoxMotion
          width="100%"
          gap="1rem"
        >
          <BoxMotion
            width="100%"
            display={isNonMobile ? 'flex' : 'block'}
            gap="1.5rem"
          >

            <BoxMotion
              flexBasis={isNonMobile ? '60%' : undefined}
              mt={isNonMobile ? undefined : '2rem'}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <BadgeWidget />
            </BoxMotion>
            <BoxMotion
              flexBasis={isNonMobile ? '40%' : undefined}
              mt={isNonMobile ? undefined : '2rem'}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <NoticeBoardWidget />
            </BoxMotion>
          </BoxMotion>

          <BoxMotion
            mt={isNonMobile ? undefined : '2rem'}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <AssignmentWidget />
          </BoxMotion>

        </BoxMotion>

      </Box>
    </>
  );
}

export default Profile;
