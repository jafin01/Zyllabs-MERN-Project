import { useTheme } from '@emotion/react';
import {
  Box, Divider, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import FlexBetween from '../components/FlexBetween';
import UserSnippetWidget from '../components/widgets/UserSnippetWidget';

function Question() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const { palette } = useTheme();
  const { dark } = palette.neutral;
  const { medium } = palette.neutral;

  return (
    <FlexBetween gap="1.5rem" paddingBottom={1.5}>
      <Box
        display={isNonMobile ? 'flex' : 'block'}
        gap="1rem"
      >
        {isNonMobile ? (
          <>
            <UserSnippetWidget size="60px" />
            <Box paddingTop={1.5}>
              <Typography
                variant="h6"
                color={dark}
                // fontWeight="500"
              >
                Jafin Jahfar
              </Typography>
              <Typography
                color={medium}
              >
                Class - X
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Box width="78vw">
              <FlexBetween gap="1rem">
                <FlexBetween gap="1rem">
                  <UserSnippetWidget size="30px" />
                  <Box>
                    <Typography
                      color={dark}
                      // fontWeight="500"
                      fontSize={isNonMobile ? '14px' : '12px'}
                    >
                      Jafin Jahfar
                    </Typography>
                    <Typography color={medium} fontSize="10px">
                      Class - X
                    </Typography>
                  </Box>
                </FlexBetween>
                <Typography color={medium} fontSize="10px">
                  posted on 10th May 2022
                </Typography>
              </FlexBetween>
            </Box>
          </>
        )}
        <Box padding="1rem 0 0 0.5rem" textAlign="left">
          <Typography
            variant={isNonMobile ? 'h5' : 'h6'}
            fontWeight="500"
          >
            What do you mean by Temporal Dead Zone??
          </Typography>
        </Box>
        { !isNonMobile && <Divider sx={{ margin: '1rem' }} />}
      </Box>
      { isNonMobile && (
        <Typography color={medium} fontSize="10px">
          posted on 10th May 2022
        </Typography>
      )}
    </FlexBetween>
  );
}

export default Question;
