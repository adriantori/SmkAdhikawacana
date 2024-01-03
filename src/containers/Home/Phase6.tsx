import { Container, Box, Typography, Grid, Paper, IconButton } from '@mui/material';

interface ContainerComponentProps {
  title: string;
  color: string;
}

const generateImage = (index: number, color: string) => (
  <Grid item key={index} xs={12}>
    <IconButton>
      <img
        src={`https://placehold.co/400x300/${index % 2 === 0 ? 'EEE' : 'DDD'}/${color.replace('#', '')}`}
        alt={`Image ${index}`}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
    </IconButton>
  </Grid>
);

const ContainerComponent: React.FC<ContainerComponentProps> = ({ title, color }) => (
  <Container
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      '@media (min-width: 600px)': {
        width: '45%',
      },
      mt:5
    }}
  >
    <Box
      sx={{
        backgroundColor: color,
        borderRadius: '100px',
        mb: 5,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width: 600px)': {
          width: '90%',
        },
      }}
    >
      <Typography
        sx={{
          color: 'white',
          textAlign: 'center',
          p: 2,
          fontWeight: 900,
          fontSize: '2rem',
          '@media (max-width: 600px)': {
            fontSize: '1.3rem',
          },
        }}
      >
        {title}
      </Typography>
    </Box>

    <Paper sx={{ width: '100%', overflow: 'auto', maxHeight: '400px', '@media (max-width: 600px)': { width: '90vw' } }}>
      <Grid container spacing={2} justifyContent="center">
        {[...Array(10).keys()].map((index) => generateImage(index, color))}
      </Grid>
    </Paper>
  </Container>
);

const Phase6: React.FC = () => (
  <Container sx={{ display: 'flex', flexDirection: 'column', '@media (min-width: 600px)': { flexDirection: 'row', justifyContent: 'space-between' } }}>
    <ContainerComponent title="BERITA SEKOLAH" color="#844AB0" />
    <ContainerComponent title="PENGUMUMAN" color="#456789" />
  </Container>
);

export default Phase6;
