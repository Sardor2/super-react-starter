import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components/macro';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { QueryClientProvider } from 'react-query';
import queryClient from './configs/react-query.config';
import { GlobalStyles } from './configs/styles.config';

const globalStyles = <GlobalStyles />;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {globalStyles}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          css={css`
            color: ${(props) => props.theme.palette.primary.main};
          `}
        >
          This is react starter
        </Typography>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
