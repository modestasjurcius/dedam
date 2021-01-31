import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = props => {
    return (
            <Navbar
                bg='dark'
                variant='dark'
                expand='lg'
                sticky='bottom'
            >
                    <Navbar.Brand>@DEDAM 2021</Navbar.Brand>
            </Navbar>
    );
};

export default Footer;