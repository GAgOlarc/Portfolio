import React from 'react';

import classes from './Project.css';

const project = (props) => {
    return (
        <div className={classes.Project}>
            <a href={props.url} target='_blank' rel="noopener noreferrer">
                <div className={classes.Card}>
                    <img src={props.imgSrc} alt={props.text}/>
                </div>
                <p className={classes.Text}>{props.text}</p>
            </a>
        </div>
    )
}

export default project;
