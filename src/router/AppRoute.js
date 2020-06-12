import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeOne from '../pages/HomePage/HomeOne';
import AboutPage from '../pages/AboutPage/AboutPage';
import CasePage from '../pages/CaseStudiesPage/CasePage';
import SolutionPage from '../pages/SolutionPage/SolutionPage';
import BlogPage from '../pages/BlogPage/BlogPage';
import ContactPage from '../pages/ContactPage/ContactPage'

class AppRoute extends Component {
    render() {
        return (
            <>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HomeOne} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/solutions" component={SolutionPage} />
                        <Route exact path="/case" component={CasePage} />
                        <Route exact path="/blog" component={BlogPage} />
                        <Route exact path="/contact" component={ContactPage} />
                    </Switch>
                </Fragment>
            </>
        );
    }
}

export default AppRoute;