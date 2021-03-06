import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rootReducer from './reducers';
import history from '../history';
import Navigation from './navigation/Navigation';
import Announcement from './announcement/Announcement';
import Home from './home/Home';
import StatusMsgs from './utils/StatusMsgs';
import UserProfile from './userProfile/UserProfile';
import Authentication from './authentication/Authentication';
import PrivateRoute from './utils/PrivateRoute';
import UserDashboard from './userDashboard/UserDashboard';
import Footer from './footer/Footer';
import './app.scss';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

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
                        <Provider store={store}>
                            <Navigation />
                            <Announcement />
                            <Route path='/' exact component={Home} />
                            <>
                                <div className='container' style={{ marginTop: '35px' }}>
                                    <Switch>
                                        <Route path='/browse-stacks' exact />
                                        <PrivateRoute
                                            path='/settings'
                                            exact
                                            component={UserDashboard}
                                        />
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
                            </>
                        </Provider>
                    </Router>
                </div>
            </div>
            <Footer />
        </div>
    );
};
