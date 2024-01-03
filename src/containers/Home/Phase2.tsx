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
                    <Typography variant="h5" sx={{ fontWeight: 900, color: '#874AB1' }}>
                        <b>SAMBUTAN KEPALA SEKOLAH</b>
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '32px', color: '#471DA5', fontWeight: 600 }}>
                        <i>Nama Kepala Sekolah</i>
                    </Typography>
                </Box>

                <Box sx={{backgroundColor:'#F9DEC3', height:'30vw', padding:'15px', paddingTop:'30px', borderRadius:'20px'}}>
                    <Typography variant='h5' sx={{fontWeight: '800', mb:2}}>
                        Title
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
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
                    src="https://placehold.co/500x400/EEE/31343C"
                    alt="Image"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
            </Box>
        </Container>
    );
};

export default Hero;
