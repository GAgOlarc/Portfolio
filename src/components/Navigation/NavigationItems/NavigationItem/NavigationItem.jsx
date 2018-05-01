import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
    const font = <FontAwesomeIcon icon={props.icon} size={props.size} className={classes.Icon} />;

    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active} >
                {font}
                <span className={classes.Content}>{props.children}</span>
            </NavLink>
        </li>
    )
};

export default navigationItem;