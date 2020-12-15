import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EngHeader from 'components/UITable/EngHeader';
import EngFooter from 'components/UITable/EngFooter';
import EngMainPageContent from 'components/EngMainPageContent';
import EngOrder from 'pages/EngOrder';
import EngRegistrationForm from 'components/EngRegistrationForm';
import EngLoginForm from 'components/EngLoginForm';
import EngResetPassword from 'components/EngResetPassword';
import EngRestaurants from 'pages/EngRestaurants';
import EngSpecialOffers from 'pages/EngSpecialOffers';
import EngMenu from 'pages/EngMenu';
import EngProfile from 'pages/EngProfile';
import EngUserOrders from 'components/EngUserOrders';

import {authRoute} from 'services/http-client/authService';
import './styles.scss';

export function EngMainPage() {
    return (
        <Router>
            <div className='main-container'>
                <EngHeader />
                <main>
                    <Switch>
                        <Route exact path='/' component={EngMainPageContent} />
                        <Route exact path='/registration' component={EngRegistrationForm} />
                        <Route path='/login' component={EngLoginForm} />
                        <Route path={authRoute.reset} component={EngResetPassword} />
                        <Route path='/restaurants' component={EngRestaurants} />
                        <Route path='/menu' component={EngMenu} />
                        <Route path='/offers' component={EngSpecialOffers} />
                        <Route path='/profile' component={EngProfile} />
                        <Route exact path='/order' component={EngOrder} />
                        <Route exact path='/myorders' component={EngUserOrders} />
                    </Switch>
                </main>
                <EngFooter />
            </div>
        </Router>
    );
}
