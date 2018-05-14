import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import classes from './Dodecahedron.css';
import bootstrapSvg from '../../../../assets/icons/bootstrap.svg';
import babelSvg from '../../../../assets/icons/babel.svg';

const dodecahedron = () => {
    return (
        <div className={classes.wrapper}>
            <div className={[classes.polyhedron, classes.dodecahedron].join(' ')}>
                <div className={classes.container}>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'html5']} size={'3x'} className={classes.Icon} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'css3-alt']} size={'3x'} className={classes.Icon} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'js']} size={'3x'} className={classes.Icon} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'sass']} size={'3x'} className={classes.Icon} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'gulp']} size={'3x'} className={classes.Icon} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'react']} size={'3x'} className={classes.Icon} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'npm']} size={'3x'} className={[classes.Icon, classes.Rotate].join(' ')} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'git']} size={'3x'} className={[classes.Icon, classes.Rotate].join(' ')} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <FontAwesomeIcon icon={['fab', 'github']} size={'3x'} className={[classes.Icon, classes.Rotate].join(' ')} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <img src={bootstrapSvg} alt="Bootstrap Logo" className={[classes.BootstrapSvg, classes.Rotate].join(' ')} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <img src={babelSvg} alt="Babel Logo" className={[classes.BabelSvg, classes.Rotate].join(' ')} />
                        </span>
                    </div>
                    <div className={[classes.face, classes.pentagon].join(' ')}>
                        <span>
                            <p className={[classes.Jquery, classes.Rotate].join(' ')}>jQuery</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dodecahedron;
