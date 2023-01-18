import { useTheme } from '@emotion/react';
import {
  Box,
  Button,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React,
{
  useState, useMemo, useRef, useEffect,
}
  from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import FlexBetween from '../FlexBetween';
import WidgetWrapper from '../WidgetWrapper';
import UserSnippetWidget from './UserSnippetWidget';
import postVariants from '../../constants/postVariants';

const BoxMotion = motion(Box);

function PostWidget() {
  const isNonMobile = useMediaQuery('(min-width:900px)');
  const [post, setPost] = useState('');
  const [selected, setSelected] = useState('select');
  const [isSelected, setIsSelected] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const inputRef = useRef();
  const { palette } = useTheme();
  const theme = useTheme();

  useEffect(() => {
    if (isSelected) { inputRef.current.focus(); }
  }, [isSelected]);

  useMemo(() => {
    if (selected !== 'select') {
      setIsSelected(true);
      if (post) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, [selected, post]);

  const handleOnBlur = () => {
    if (!post) {
      setSelected('select');
      setIsSelected(false);
    }
  };

  return (
    <WidgetWrapper>
      <FlexBetween gap={isNonMobile ? '1.5rem' : '1rem'} paddingBottom={1.5}>
        <UserSnippetWidget size={isNonMobile ? '50px' : '35px'} />
        <FormControl
          fullWidth
          variant="standard"
          value={selected}
        >
          <Select
            value={selected}
            sx={{
              backgroundColor: palette.neutral.light,
              borderRadius: '1rem',
              padding: isNonMobile ? '0.7rem 1rem' : '.4rem .9rem',
              '& .MuiSvgIcon-root': {
                pr: '0.25rem',
                width: '3rem',
              },
              '& .MuiSelect-select:focus': {
                backgroundColor: palette.neutral.light,
              },
            }}
            input={<InputBase />}
          >
            <MenuItem
              value="select"
              onClick={() => {
                setSelected('select');
                setIsSelected(false);
              }}
            >
              <Typography>Have a Question??</Typography>
            </MenuItem>
            <MenuItem value="physics" onClick={() => (setSelected('physics'))}>
              <Typography>Physics</Typography>
            </MenuItem>
            <MenuItem value="chemistry" onClick={() => setSelected('chemistry')}>
              <Typography>Chemistry</Typography>
            </MenuItem>
            <MenuItem value="biology" onClick={() => setSelected('biology')}>
              <Typography>Biology</Typography>
            </MenuItem>
            <MenuItem value="mathematics" onClick={() => setSelected('mathematics')}>
              <Typography>Mathematics</Typography>
            </MenuItem>
            <MenuItem value="english" onClick={() => setSelected('english')}>
              <Typography>English</Typography>
            </MenuItem>
          </Select>
        </FormControl>
      </FlexBetween>
      <AnimatePresence mode="popLayout">
        {isSelected && (
        <>
          <BoxMotion
            // key="input"
            variants={postVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <InputBase
              inputRef={inputRef}
              multiline
              placeholder="Have a Question on your mind...??"
              onChange={(e) => setPost(e.target.value)}
              onBlur={handleOnBlur}
              value={post}
              sx={{
                width: '100%',
                backgroundColor: palette.neutral.light,
                borderRadius: '1rem',
                padding: isNonMobile ? '0.7rem 1rem' : '.7rem .9rem',
                fontSize: theme.typography.fontSize,
                '&.Mui-focused': {
                  border: `0.2px ridge ${palette.primary.main}`,
                },
              }}
            />
          </BoxMotion>

          <AnimatePresence mode="popLayout">
            {showButton && (
              <BoxMotion
                key="button"
                variants={postVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Button
                  fullWidth
                  disabled={!post}
                  onClick={() => {}}
                  sx={{
                    color: palette.mode === 'dark' ? palette.primary.dark : palette.primary.main,
                    backgroundColor: palette.mode === 'dark'
                      ? palette.primary.custom
                      : palette.background.custom,
                    borderRadius: '1rem',
                    marginTop: '1rem',
                    height: isNonMobile ? '35px' : '35px',
                  }}
                >
                  POST
                </Button>
              </BoxMotion>
            )}
          </AnimatePresence>
        </>
        )}
      </AnimatePresence>

    </WidgetWrapper>
  );
}

export default PostWidget;
