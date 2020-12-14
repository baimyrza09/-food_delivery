import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import AuthContextProvider from './contexts/AuthContext';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthContextProvider>
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                </AuthContextProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;