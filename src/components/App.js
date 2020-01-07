import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../history';
import Navigation from './navigation/Navigation';
import Announcement from './announcement/Announcement';
import Home from './home/Home';
import Authentication from './authentication/Authentication';
import UserProfile from './userProfile/UserProfile';
import Footer from './footer/Footer';
import './app.scss';

export default () => {
    toast.configure({
        autoclose: 10000,
        draggable: false,
        position: toast.POSITION.BOTTOM_RIGHT
    });
    return (
        <div>
            <div className='content'>
                <div className='main'>
                    <Router history={history}>
                        <Navigation />
                        <Announcement />

                        <div>
                            <div className='container' style={{ marginTop: '35px' }}>
                                <Route path='/' exact component={Home} />
                                <Switch>
                                    <Route path='/browse-stacks' exact component={Home} />
                                    <Route path='/changeLater' exact component={UserProfile} />
                                    <Route
                                        path='/login'
                                        exact
                                        render={() => <Authentication isTypeLogin />}
                                    />
                                    <Route
                                        path='/signup'
                                        exact
                                        render={() => <Authentication isTypeLogin={false} />}
                                    />
                                    <Route path='/:userName' exact component={UserProfile} />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
            <Footer />
        </div>
    );
};
