import React, { Component } from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.jsx';

class NavigationItems extends Component {
    state = {
        width: null,
        navItems: {
            home: {
                link: '/',
                content: 'Home',
                icon: 'home',
                exact: true
            },
            about: {
                link: '/about',
                content: 'About',
                icon: 'user-circle',
                exact: false
            },
            projects: {
                link: '/projects',
                content: 'Projects',
                icon: 'folder-open',
                exact: false
            },
            contact: {
                link: '/contact',
                content: 'Contact',
                icon: 'envelope',
                exact: false
            }
        }
    }

    componentWillMount() {
        this.setState({
            width: window.innerWidth
        });
    }

    render() {
        const size = this.state.width < 500 ? '2x' : 'lg';

        const navItemsArray = [];

        for (let key in this.state.navItems) {
            navItemsArray.push({
                id: key,
                config: this.state.navItems[key]
            });
        }

        const navItems = navItemsArray.map(navItem => (
            <NavigationItem
                key={navItem.id}
                link={navItem.config.link}
                exact={navItem.config.exact}
                icon={navItem.config.icon}
                size={size} >
                {navItem.config.content}
            </NavigationItem>
        ));

        return (
            <ul className={classes.NavigationItems}>
                {navItems}
            </ul>
        );
    }
};

export default NavigationItems;