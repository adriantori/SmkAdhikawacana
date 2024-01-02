import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../components';
import { CssBaseline, Container } from '@mui/material';

const PublicLayout = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container style={{ flex: 1 }}>
          <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default PublicLayout;
