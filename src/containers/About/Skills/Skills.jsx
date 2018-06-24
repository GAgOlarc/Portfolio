import React from 'react';

import classes from './Skills.css';
import Dodecahedron from './Dodecahedron/Dodecahedron.jsx';

const skills = () => (
    <div className={classes.Skills}>
        <h1>Skills & Experiences</h1>
        <div className={classes.Content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad, eum ab, cumque dignissimos, earum doloribus corrupti at recusandae dicta facilis fugit possimus deleniti libero. Ex quia sunt ipsam molestiae.</p>
            <Dodecahedron />
        </div>
    </div>
);

export default skills;