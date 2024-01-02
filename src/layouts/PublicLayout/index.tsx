import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../components';
import { CssBaseline, Container, Paper } from '@mui/material';

const PublicLayout = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container style={{ flex: 1 }}>
        <Paper elevation={0} style={{ marginTop: '0px'}}>
          <Outlet />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default PublicLayout;
