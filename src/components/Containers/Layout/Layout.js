import React, { useState } from 'react';
import classes from './Layout.module.css';
import Menu from './Menu/Menu';
import Logo from '../../UI/Logo/Logo';
import Footer from './Footer/Footer';

const Layout = props => {
    return (
        <>
            <Menu
                onChangePage={props.onChangePage}
                onChangeUser={props.onChangeUser}
                user={props.user}
            />
            <main className={classes.main}>
                <Logo />
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;