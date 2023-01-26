import { container, item } from '@/animations/animations';
import {
    Container,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { motion as m } from 'framer-motion';
import React from 'react';

const ContactUs = () => {
    return (
        <m.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            style={{
                height: '100vh',
                backgroundColor: pink[500],
                position: 'absolute',
                inset: 0,
                display: 'grid',
                placeItems: 'center',
                width: '100vw',
            }}
        >
            <Container>
                <div style={{ overflow: 'hidden' }}>
                    <m.div
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Typography variant="h3" textAlign="center">
                            Contact Page
                        </Typography>
                    </m.div>
                </div>

                <m.div variants={container} initial="hidden" animate="show">
                    <List sx={{ width: '400px', margin: '0 auto' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <m.div variants={item}>
                                <ListItemButton>
                                    <ListItemText sx={{ textAlign: 'center' }}>
                                        Facebook
                                    </ListItemText>
                                </ListItemButton>
                            </m.div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <m.div variants={item}>
                                <ListItemButton>
                                    <ListItemText sx={{ textAlign: 'center' }}>
                                        Instagram
                                    </ListItemText>
                                </ListItemButton>
                            </m.div>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <m.div variants={item}>
                                <ListItemButton>
                                    <ListItemText sx={{ textAlign: 'center' }}>
                                        LinkedIn
                                    </ListItemText>
                                </ListItemButton>
                            </m.div>
                        </div>
                    </List>
                </m.div>
            </Container>
        </m.div>
    );
};

export default ContactUs;
