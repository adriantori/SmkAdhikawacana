import React from 'react';
import { Box, Paper, Typography, Container } from '@mui/material/';

const Footer: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'red',
            padding: 1,
            flexBasis: '34%',
            flexGrow: 1,
          }}
        >
          <Typography variant="body1">Left Title</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 1,
            flexBasis: '66%',
            flexGrow: 1,
          }}
        >
          <Typography variant="body1">Right Title</Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Box
            key={index}
            sx={{
              flexBasis: '16.66%', // 6 parts with equal ratio
              marginBottom: 2,
              textAlign: 'left',
              paddingTop: 2,
              paddingBottom: 5
            }}
          >
            <Typography variant="body2">Item {index}</Typography>
            <Typography variant="caption">Child Text</Typography>
          </Box>
        ))}
      </Container>
    </Paper>
  );
};

export default Footer;
