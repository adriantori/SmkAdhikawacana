import React from 'react';
import { Box, Typography, Container, useTheme  } from '@mui/material/';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: '#743B9C',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        [theme.breakpoints.up('lg')]: {
          // Use a custom breakpoint (in this case, 'lg') to override the default max-width
          maxWidth: '100%',
        },
      }}
      disableGutters
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          [theme.breakpoints.up('lg')]: {
            // Use a custom breakpoint (in this case, 'lg') to override the default max-width
            maxWidth: '100%',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#743B9C',
            paddingTop: 2,
            flexBasis: '45%',
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
              fontWeight: 400,
              color: 'white',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' },
              padding: '0px 96px 0px 40px',
              alignItems: 'center',
            }}
          >
            <img
              src="./logo.png"
              alt="Logo"
              style={{ marginRight: '8px', width: '56px', height: '24px' }}
              />
            SMK ADHIKAWACANA
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            flexBasis: '55%',
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
          [theme.breakpoints.up('lg')]: {
            // Use a custom breakpoint (in this case, 'lg') to override the default max-width
            maxWidth: '100%',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#743B9C',
            paddingTop: 4,
            flexBasis: '45%',
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
            flexBasis: '55%',
            flexGrow: 1,
            borderRadius: '0 0 0 100px',
            marginRight: '0'
          }}
        >
        </Box>
      </Container>
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          [theme.breakpoints.up('lg')]: {
            // Use a custom breakpoint (in this case, 'lg') to override the default max-width
            maxWidth: '100%',
          },
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
    </Container>
  );
};

export default Footer;
