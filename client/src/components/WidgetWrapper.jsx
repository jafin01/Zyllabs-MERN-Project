import { Box } from '@mui/material';
import { styled } from '@mui/system';

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
  backgroundColor: theme.palette.background.alt,
  borderRadius: '2rem',
  marginBottom: '1.5rem',
  boxShadow: theme.palette.mode === 'light'
    ? '0 2px 8px 0 rgb(197,197,197)'
    : '0 2px 10px 0 #000000',
}));

export default WidgetWrapper;
