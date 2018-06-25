import React from 'react';

import classes from './Skills.css';
import Dodecahedron from './Dodecahedron/Dodecahedron.jsx';

const skills = () => (
    <div className={classes.Skills}>
        <h1>Skills & Experiences</h1>
        <div className={classes.Content}>
            <div className={classes.Text}>
                <h3 className={classes.Title}>Front-end</h3>
                <p>HTML5, CSS3, Javascript, ES6, React.js, Sass, Bootstrap, Jquery</p>
                <h3 className={classes.Title}>Back-end</h3>
                <p>Node.js, MySQL</p>
                <h3 className={classes.Title}>VCS</h3>
                <p>Git, Github</p>
                <h3 className={classes.Title}>Cloud</h3>
                <p>Firebase, AWS</p>
            </div>
            <Dodecahedron />
        </div>
    </div>
);

export default skills;