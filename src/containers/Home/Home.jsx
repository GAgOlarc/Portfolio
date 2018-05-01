import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Home.css';

const home = () => (
    <div className={classes.Parallax}>
        <div className={classes.Backdrop}>
            <div className={classes.Content}>
                <h1>Hi,</h1>
                <h1>I'm Andras,</h1>
                <h1>Front End Developer.</h1>
                <div className={classes.Paragraph}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, numquam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <NavLink to='/contact'>
                    Contact Me
                </NavLink>
            </div>
        </div>
    </div>
);

export default home;