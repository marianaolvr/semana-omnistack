import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch> 
        {/* Switch garante que apenas uma rota seja executada por momento */}

        <Route path="/" exact component={Login} />
        {/* Exact porque o react lê apenas a barra e isso interfere nas outras rotas. todas cairíam na primeira */}
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />

        </Switch>

        </BrowserRouter>
    );

}