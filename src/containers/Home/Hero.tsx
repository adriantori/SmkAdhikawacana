import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Hero: React.FC = () => {

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, mt: 5 }}>
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          padding: '0 20px', // Adjust padding as needed
          textAlign: 'justify',
          order: { xs: 2, md: 1 }, // Change order on mobile
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
          <b>SMA Adhikawacana</b>
        </Typography>
        <Typography variant="body1" paragraph sx={{ mr: 10 }}>
          Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus vehicula justo nec justo tristique, ut aliquam odio malesuada.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#844AB0', borderRadius: '100px', height: '40px', width: 'auto' }}>
          <b>Join Us!</b>
        </Button>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          order: { xs: 1, md: 2 }, // Change order on mobile
        }}
      >
        <img
          src="https://placehold.co/600x400/EEE/31343C"
          alt="Image"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Container>
  );
};

export default Hero;
