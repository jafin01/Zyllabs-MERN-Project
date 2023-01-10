import { useTheme } from '@emotion/react';
import { Button, InputBase, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import FlexBetween from '../../components/FlexBetween';
import WidgetWrapper from '../../components/WidgetWrapper';
import UserSnippetWidget from './UserSnippetWidget';

function PostWidget() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const [post, setPost] = useState('');
  const { palette } = useTheme();

  return (
    <WidgetWrapper>
      <FlexBetween gap={isNonMobile ? '1.5rem' : '1rem'} paddingBottom={1.5}>
        <UserSnippetWidget size={isNonMobile ? '60px' : '35px'} />
        <InputBase
          placeholder="Have a Question on your mind...??"
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: '100%',
            backgroundColor: palette.neutral.light,
            borderRadius: '2rem',
            padding: isNonMobile ? '1rem 2rem' : '.4rem .9rem',
            fontSize: isNonMobile ? '14px' : '11px',
          }}
        />
        <Button
          disabled={!post}
          onClick={() => {}}
          sx={{
            color: palette.mode === 'dark' ? palette.primary.dark : palette.primary.main,
            backgroundColor: palette.mode === 'dark' ? palette.primary.custom : palette.background.custom,
            borderRadius: '3rem',
            height: isNonMobile ? '60px' : '35px',
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
}

export default PostWidget;
