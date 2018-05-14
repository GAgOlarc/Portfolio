import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUser from '@fortawesome/fontawesome-free-solid/faUserCircle';
import faFolder from '@fortawesome/fontawesome-free-solid/faFolderOpen';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faAt from '@fortawesome/fontawesome-free-solid/faAt';

import Layout from './hoc/Layout/Layout.jsx';
import Home from './containers/Home/Home.jsx';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

fontawesome.library.add(brands, faHome, faUser, faFolder, faEnvelope, faAt);

const asyncAbout = asyncComponent(() => import('./containers/About/About.jsx'));
const asyncProjects = asyncComponent(() => import('./containers/Projects/Projects.jsx'));
const asyncContact = asyncComponent(() => import('./containers/Contact/Contact.jsx'));

class App extends Component {
    render() {
        const routes =
            <Switch>
                <Route path='/about' component={asyncAbout} />
                <Route path='/projects' component={asyncProjects} />
                <Route path='/contact' component={asyncContact} />
                <Route path='/' exact component={Home} />
                <Redirect to='/' />
            </Switch>

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default App;
