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
import About from './containers/About/About.jsx';
import Projects from './containers/Projects/Projects.jsx';
import Contact from './containers/Contact/Contact.jsx';


fontawesome.library.add(brands, faHome, faUser, faFolder, faEnvelope, faAt);

class App extends Component {
    render() {
        const routes =
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
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
