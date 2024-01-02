import { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const pages = [
    { title: 'Beranda', href: '#products' },
    { title: 'Tentang Kami', href: '#pricing' },
    { title: 'Program', href: '#blog' },
    { title: 'Alumni', href: '#blog' },
    { title: 'Kontak', href: '#blog' },
    { title: 'PPDB', href: '#blog' },
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
            <Container maxWidth="xl" disableGutters>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            backgroundColor: '#743B9C',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                            display: { xs: 'none', md: 'flex' },
                            margin: '0 40px 0 0',
                            padding: '0px 96px 0px 40px',
                            borderRadius: '0 0 100px 0',
                            height: '70px',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="./logo.png"
                            alt="Logo"
                            style={{ marginRight: '8px', width: '24px', height: '24px' }}
                        />
                        SMK ADHIKAWACANA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(({ title, href }) => (
                                <MenuItem key={title} onClick={handleCloseNavMenu} sx={{ color: '#9A63AE' }}>
                                    <Typography textAlign="center" component="a" href={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        {title}
                                    </Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'black',
                            textDecoration: 'none',
                            height: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="./logo.png"
                            alt="Logo"
                            style={{ marginRight: '8px', width: '24px', height: '24px' }}
                        />
                        SMK ADHIKAWACANA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color: 'black' } }}>
                        {pages.map(({ title, href }) => (
                            <Button
                                key={title}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#9A63AE', display: 'block', whiteSpace: 'nowrap', textTransform: 'none', fontWeight: 500 }}
                                component="a"
                                href={href}
                            >
                                {title}
                            </Button>
                        ))}
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: '1rem', ml: 'auto' }}>
                            <IconButton aria-label="Instagram" color="inherit" href="#instagram" sx={{ color: "#fff", backgroundColor: '#743B9C', mr: '1rem' }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="LinkedIn" color="inherit" href="#linkedin" sx={{ color: "#fff", backgroundColor: '#743B9C', mr: '1rem' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="Email" color="inherit" href="mailto:example@example.com" sx={{ color: "#fff", backgroundColor: '#743B9C', mr: '1rem' }}>
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
