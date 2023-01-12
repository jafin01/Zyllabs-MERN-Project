import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import FlexBetween from '../FlexBetween';
import WidgetWrapper from '../WidgetWrapper';

function BadgeWidget() {
  const { palette } = useTheme();
  const { dark } = palette.neutral;
  const { medium } = palette.neutral;

  return (
    <WidgetWrapper
      sx={{ mb: 2 }}
    >
      <FlexBetween>

        <FlexBetween gap="1.5rem">
          <Box
            width={150}
            height={150}
          >
            <img
              style={{ objectFit: 'cover', borderRadius: '50%' }}
              width={150}
              height={150}
              alt="user"
              src="https://www.pngfind.com/pngs/m/669-6692892_logo-sample-logo-designs-for-schools-hd-png.png"
            />

          </Box>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  curson: 'pointer',
                },
              }}
            >
              Jafin Jahfar
            </Typography>
            <Typography color={medium}>
              friends
            </Typography>
          </Box>
        </FlexBetween>

      </FlexBetween>
    </WidgetWrapper>
  );
}

export default BadgeWidget;
