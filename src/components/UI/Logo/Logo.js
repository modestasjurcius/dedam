import React from 'react';
import logo from './dedam.png';
import classes from './Logo.module.css';

const Logo = props => (
    <div className={classes.container}>
        <img
            src={logo}
            className={classes.img}
        />
    </div>
);

export default Logo;