import React from 'react';
import { Box, Paper, Typography, Container } from '@mui/material/';

const Footer: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#743B9C',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        margin: 0
      }}
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: 'white'
        }}
      >
        <Box
          sx={{
            backgroundColor: '#743B9C',
            paddingTop: 2,
            flexBasis: '34%',
            flexGrow: 1,
            borderRadius: '0 100px 0 0',
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' },
              padding: '0px 0px 0px 40px',
              alignItems: 'center',
            }}
          >
            <img
              src="./logo.png"
              alt="Logo"
              style={{ marginRight: '8px', width: '24px', height: '24px' }}
            />
            SMK ADHIKAWACANA
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            flexBasis: '66%',
            flexGrow: 1,
            borderRadius: '0 0 0 100px',

          }}
        >
        </Box>
      </Container>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: '#743B9C',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#743B9C',
            paddingTop: 4,
            flexBasis: '34%',
            flexGrow: 1,
            borderRadius: '0 0 0 0',
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' },
              padding: '0px 0px 0px 64px',
              alignItems: 'center',
            }}
          >
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            flexBasis: '66%',
            flexGrow: 1,
            borderRadius: '0 0 0 100px',

          }}
        >
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
              paddingBottom: 5,
              paddingLeft: '32px'

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
