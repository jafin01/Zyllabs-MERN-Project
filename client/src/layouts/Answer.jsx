import { useTheme } from '@emotion/react';
import {
  Box, Divider, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import FlexBetween from '../components/FlexBetween';
import UserSnippetWidget from '../components/widgets/UserSnippetWidget';

function Answer() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const { palette } = useTheme();
  const { dark } = palette.neutral;
  const { medium } = palette.neutral;

  return (
    <FlexBetween gap="1.5rem" padding={1.5}>
      <Box
        display={isNonMobile ? 'flex' : 'block'}
        gap="1rem"
      >
        <>
          <Box>
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
            <Box paddingTop="1rem" textAlign="left">
              <Typography
                fontSize={isNonMobile ? '16px' : '14px'}
                textAlign="justify"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. Desktop publishing software like Aldus PageMaker including
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
            </Box>
            <Divider sx={{ marginTop: '2rem' }} />
          </Box>
        </>

      </Box>
    </FlexBetween>
  );
}

export default Answer;
