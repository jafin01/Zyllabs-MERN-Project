import React from 'react';
import {
  Divider,
  useMediaQuery,
} from '@mui/material';

import WidgetWrapper from '../../components/WidgetWrapper';
import Question from '../Question';
import Answer from '../Answer';

function QnPostWidget() {
  const isNonMobile = useMediaQuery('(min-width:900px)');

  return (
    <WidgetWrapper>
      <Question />
      { isNonMobile && <Divider sx={{ margin: '0.5rem' }} />}

      <Answer />
      <Answer />

    </WidgetWrapper>
  );
}

export default QnPostWidget;
