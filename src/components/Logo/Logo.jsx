import React from 'react';

import logoSmall from '../../assets/images/logo_small.png';
import logoBig from '../../assets/images/logo_big.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoSmall} alt="small logo" className={classes.LogoSmall} />
        <img src={logoBig} alt="big logo" className={classes.LogoBig} />
    </div>
);

export default logo;