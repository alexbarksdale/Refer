import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../history';
import Navigation from './navigation/Navigation';
import Announcement from './announcement/Announcement';
import Home from './home/Home';
import StatusMsgs from './utils/StatusMsgs';
import UserProfile from './userProfile/UserProfile';
import Authentication from './authentication/Authentication';
import UserDashboard from './userDashboard/UserDashboard';
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
                        <StatusMsgs />

                        <div>
                            <div className='container' style={{ marginTop: '35px' }}>
                                <Route path='/' exact component={Home} />
                                <Switch>
                                    <Route path='/browse-stacks' exact component={Home} />
                                    <Route path='/changeLater' exact component={UserProfile} />
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
