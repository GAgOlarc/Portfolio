import React from 'react';

import classes from './About.css';
import Skills from './Skills/Skills.jsx';
import faceJpg from '../../assets/images/face.jpg';

const about = () => (
    <div className={classes.About}>
        <h1>About me</h1>
        <div className={classes.FaceText}>
            <div className={classes.Face}>
                <img src={faceJpg} alt="face"/>
            </div>
            <p className={classes.AboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit nobis id sint modi eaque aliquam labore corrupti non libero placeat facere quaerat enim repellendus nostrum iusto, maxime optio reprehenderit illo ex? Fuga laboriosam dolor magni maiores voluptas sed quos perspiciatis repellat, vitae reprehenderit perferendis nihil harum pariatur nulla praesentium.</p>
        </div>
        <Skills />
    </div>
);

export default about;