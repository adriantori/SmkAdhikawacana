import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Hero: React.FC = () => {
    return (
        <Container sx={{ display: 'flex', mt: 5 }}>
            {/* Left Side */}
            <Box
                sx={{
                    flex: 1,
                    padding: '0 20px', // Adjust padding as needed
                }}
            >
                <Box sx={{}}>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                        <b>SAMBUTAN KEPALA SEKOLAH</b>
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '32px' }}>
                        <i>Nama Kepala Sekolah</i>
                    </Typography>
                </Box>

                <Box sx={{backgroundColor:'F9DEC3'}}>
                    <Typography variant="body1" paragraph sx={{ mr: 10 }}>
                        Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vehicula justo nec justo tristique, ut aliquam odio malesuada.
                    </Typography>
                </Box>
            </Box>

            {/* Right Side */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="https://placehold.co/600x500/EEE/31343C"
                    alt="Image"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
            </Box>
        </Container>
    );
};

export default Hero;
