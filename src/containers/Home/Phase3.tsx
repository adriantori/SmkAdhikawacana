import { Container, Box, Typography } from '@mui/material';

const Phase3 = () => {
  return (
    <Container sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{ backgroundColor: '#844AB0', borderRadius: '100px', mb: 5, width: '60vw', display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', p: 2, fontWeight: 900 }}>
          SEJARAH SINGKAT SMEKDHIWA
        </Typography>
      </Box>

      <Typography paragraph variant='h6' sx={{ textAlign: 'center', ml: '5vw', mr: '5vw' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus, dicta saepe ad numquam minima dolorum perferendis doloremque consequatur quibusdam, exercitationem distinctio? Soluta debitis sit nemo ipsa praesentium ea aliquid?
      </Typography>
    </Container>
  );
};

export default Phase3;
