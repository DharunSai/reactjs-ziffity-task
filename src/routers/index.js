import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import NotFoundPage from '../components/NotFoundPage';
import PlanetDetail from '../components/Planets/PlanetDetail';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/planet/' component={PlanetDetail} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
