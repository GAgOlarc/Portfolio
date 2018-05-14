import React from 'react';

import classes from './Projects.css';
import Project from './Project/Project.jsx';
import burgerPng from '../../assets/images/burger_builder_site.png';
import webAppDashboardSite from '../../assets/images/web_app_dashboard_site.png';
import bootstrapPng from '../../assets/images/bootstrap_site.png';
import interactiveForm from '../../assets/images/interactive_form_site.png';
import randomQuoteGenerator from '../../assets/images/random_quote_generator_site.png';
import cssTransforms from '../../assets/images/css_transforms_site.png';

const projects = () => {
    const projects = [
        {
            projectUrl: 'https://react-my-burger-c8e45.firebaseapp.com/',
            text: 'Burger Builder',
            imgSrc: burgerPng
        },
        {
            projectUrl: 'https://andrasnett.github.io/Web-App-Dashboard/',
            text: 'Web App Dashboard',
            imgSrc: webAppDashboardSite
        },
        {
            projectUrl: 'https://andrasnett.github.io/Bootstrap_v4.0.0-alpha.6/',
            text: 'Bootstrap v4-alpha',
            imgSrc: bootstrapPng
        },
        {
            projectUrl: 'https://andrasnett.github.io/interactive_form/',
            text: 'Interactive Form',
            imgSrc: interactiveForm
        },
        {
            projectUrl: 'https://andrasnett.github.io/Random-Quote-Generator/',
            text: 'Random Quote Generator',
            imgSrc: randomQuoteGenerator
        },
        {
            projectUrl: 'https://andrasnett.github.io/css_transforms/',
            text: 'Css Transforms',
            imgSrc: cssTransforms
        }
    ];

    const project = projects.map(project => (
        <Project
            key={project.text}
            url={project.projectUrl}
            text={project.text}
            imgSrc={project.imgSrc} />
    ));

    return (
        <div className={classes.Projects}>
            {/* <h1>Projects</h1> */}
            <div className={classes.Content}>
                {project}
            </div>
        </div>
    )
};

export default projects;