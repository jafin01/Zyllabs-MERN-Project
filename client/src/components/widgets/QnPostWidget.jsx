import React from 'react';
import {
  Divider,
  useMediaQuery,
} from '@mui/material';

import WidgetWrapper from '../WidgetWrapper';
import Question from '../../layouts/Question';
import Answer from '../../layouts/Answer';

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
