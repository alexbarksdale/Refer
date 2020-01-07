import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';
import './authentication.scss';
import './authForm.scss';

class Authentication extends Component {
    componentDidMount() {}

    render() {
        const { isTypeLogin } = this.props;

        return (
            <div className='authentication'>
                <div className='auth-content card'>
                    <h1>{isTypeLogin ? 'Log In' : 'Sign Up'}</h1>
                    <p>{isTypeLogin ? 'Sign in to access your account' : 'Create an account'}</p>
                    <div className='auth-credentials'>{isTypeLogin ? <Login /> : <Signup />}</div>
                </div>
            </div>
        );
    }
}

Authentication.propTypes = {
    isTypeLogin: PropTypes.bool.isRequired
};

export default Authentication;
