import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import classes from './Skills.css';
import bootstrapSvg from '../../../assets/icons/bootstrap.svg';
import babelSvg from '../../../assets/icons/babel.svg';

const skills = () => (
    <div className={classes.Skills}>
        <h1>Skills & Experiences</h1>
        <div className={classes.Content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad, eum ab, cumque dignissimos, earum doloribus corrupti at recusandae dicta facilis fugit possimus deleniti libero. Ex quia sunt ipsam molestiae.</p>
            <div className={classes.Dodecahedron}>
                <div className={classes.Pentagon}>
                    <section>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'html5']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'css3-alt']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'js']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'sass']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'gulp']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div className={classes.Base}>
                            <FontAwesomeIcon icon={['fab', 'react']} size={'3x'} className={classes.Icon} />
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src={babelSvg} alt="Babel Logo" className={[classes.BabelSvg, classes.Svg].join(' ')}/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'npm']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'git']} size={'3x'} className={classes.Icon} />
                        </div>
                        <div>
                            <p className={[classes.Jquery, classes.Svg].join(' ')}>jQuery</p>
                        </div>
                        <div>
                            <img src={bootstrapSvg} alt="Bootstrap Logo" className={[classes.BootstrapSvg, classes.Svg].join(' ')}/>
                        </div>
                        <div className={classes.Base}>
                            <FontAwesomeIcon icon={['fab', 'github']} size={'3x'} className={classes.Icon} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

export default skills;