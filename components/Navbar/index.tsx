import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

const navItems = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Contact',
        href: '/contact-us',
    },
];

const Navbar = () => {
    return (
        <AppBar
            elevation={0}
            color="transparent"
            component="nav"
            position="static"
            sx={{
                zIndex: 20,
                position: 'relative',
            }}
        >
            <Container>
                <Toolbar sx={{ px: '0 !important' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Screen Transition
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.href}>
                                <Button color="inherit">{item.title}</Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
