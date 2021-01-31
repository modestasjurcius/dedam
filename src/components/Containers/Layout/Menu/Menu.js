import React from 'react';
import classes from './Menu.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../UI/Logo/dedam.png';

const Menu = props => {

    const changePage = page => {
        if (props.onChangePage)
            props.onChangePage(page);
    };

    const logout = () => {
        if (props.onChangeUser)
            props.onChangeUser(null);

        if (props.onChangePage)
            props.onChangePage('main');
    };

    return (
        <Navbar
            bg='dark'
            variant='dark'
            expand='lg'
            sticky='top'
        >
            <Navbar.Brand onClick={() => {changePage('main')}}>
                <img
                    src={logo}
                    width='100'
                    height='50'
                    className={classes.img}
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="">
                    {!props.user &&
                        <>
                            <Nav.Link onClick={() => { changePage('login') }}>
                                Prisijungimas
                                <i class="fa fa-sign-in pl-2 pr-2"></i>
                            </Nav.Link>
                            <Nav.Link onClick={() => { changePage('register') }}>
                                Registracija
                                <i class="fa fa-user-plus pl-2"></i>
                            </Nav.Link>
                        </>
                    }
                    {props.user &&
                        <>
                        <Nav.Link onClick={() => { changePage('profile') }}>
                                Profilis
                                <i class="fa fa-id-badge pl-2 pr-2"></i>
                            </Nav.Link>
                            <Nav.Link onClick={() => { changePage('cart') }}>
                                Krepšelis
                                <i class="fa fa-shopping-cart pl-2 pr-2"></i>
                            </Nav.Link>
                            <Nav.Link onClick={logout}>
                                Atsijungti
                                <i class="fa fa-sign-out pl-2"></i>
                            </Nav.Link>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Menu;