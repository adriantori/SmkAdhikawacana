import { Container, Box, Typography, Grid } from '@mui/material';

const Phase5 = () => {
  return (
    <Container sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Box sx={{ backgroundColor: '#844AB0', borderRadius: '100px', mb: 5, width: '60vw', display: 'flex', justifyContent: 'center', '@media (max-width: 600px)': {
        width: '90vw'
      } 
      }}>
        <Typography sx={{ 
          color: 'white', textAlign: 'center', p: 2, fontWeight: 900, fontSize:'2rem', '@media (max-width: 600px)': {
        fontSize:'1.3rem'
      } 
      }}>
          GALERI SMK ADHIKAWACANA
        </Typography>
      </Box>

      {/* IMAGES */}
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Grid item key={index} xs={6} md={4}>
            <img
              src={`https://placehold.co/400x300/${index % 2 === 0 ? 'EEE' : 'DDD'}/31343C`}
              alt={`Image ${index}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                border: '2px solid white',
                boxShadow: '12px 12px 16px rgba(0, 0, 0, 0.1)', // Add shadow
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Phase5;
