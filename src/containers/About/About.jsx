import React from 'react';

import classes from './About.css';
import Skills from './Skills/Skills.jsx';
import faceJpg from '../../assets/images/face.jpg';

const about = () => (
    <div className={classes.About}>
        <div className={classes.Backdrop}>
            <div className={classes.Content}>
                <div className={classes.AboutText}>
                    <h1>About me</h1>
                    <div className={classes.FaceText}>
                        <div className={classes.Face}>
                            <img src={faceJpg} alt="face" />
                        </div>
                        <p>I'm Andras Nett, a front end developer. I value simple content structure, clean design patterns, and thoughtful interactions. I tend to code things from scratch, and enjoy bringing ideas to life in the browser. My skills are broad: from ux to design.</p>
                    </div>
                </div>
                <Skills className={classes.Skills} />
            </div>
        </div>
    </div>
);

export default about;