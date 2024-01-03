import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Phase2: React.FC = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 5 }}>
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          padding: '0 20px', // Adjust padding as needed
          order: { xs: 2, md: 1 }, // Change order on mobile
          textAlign: { xs: 'center', md: 'justify' }, // Adjust text alignment for mobile
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 900, color: '#874AB1', mt:3 }}>
          <b>SAMBUTAN KEPALA SEKOLAH</b>
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '32px', color: '#471DA5', fontWeight: 600 }}>
          <i>Nama Kepala Sekolah</i>
        </Typography>

        <Box
          sx={{
            backgroundColor: '#F9DEC3',
            height: '30vw',
            padding: '15px',
            paddingTop: '30px',
            borderRadius: '20px',
            '@media (max-width: 600px)': {
              height: 'auto',
              textAlign: 'center',
            },
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '800', mb: 2 }}>
            Title
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
            Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula justo nec justo tristique, ut aliquam odio malesuada.
          </Typography>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          order: { xs: 1, md: 2 }, // Change order on mobile
          marginTop: { xs: '20px', md: 0 }, // Add margin-top for mobile
        }}
      >
        <img
          src="https://placehold.co/500x400/EEE/31343C"
          alt="Image"
          style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
        />
      </Box>
    </Container>
  );
};

export default Phase2;
