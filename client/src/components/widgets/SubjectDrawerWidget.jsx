import {
  Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import WidgetWrapper from '../WidgetWrapper';

function SubjectDrawerWidget() {
  // const isNonMobile = useMediaQuery('(min-width:900px)');

  return (
    <WidgetWrapper>
      <Box display="flex" justifyContent="center" pb={3}>
        <Box
          width={150}
          height={600}
        >
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ fontSize: '20px', padding: '10px 0 20px 0' }}>Select Subject</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox name="english" />
                }
                label="English"
              />
              <FormControlLabel
                control={
                  <Checkbox name="mathematics" />
                }
                label="Mathematics"
              />
              <FormControlLabel
                control={
                  <Checkbox name="physics" />
                }
                label="Physics"
              />
              <FormControlLabel
                control={
                  <Checkbox name="chemistry" />
                }
                label="Chemistry"
              />
              <FormControlLabel
                control={
                  <Checkbox name="Biology" />
                }
                label="Biology"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </WidgetWrapper>
  );
}

export default SubjectDrawerWidget;
