import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* eslint-disable */
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/login' />
        }
    />
);
PrivateRoute.propTypes = {
    auth: PropTypes.shape({
        isAuthenticated: PropTypes.bool,
        loading: PropTypes.bool,
        user: PropTypes.shape({
            id: PropTypes.string,
            email: PropTypes.string,
            password: PropTypes.string,
            username: PropTypes.string,
            displayname: PropTypes.string,
            dob: PropTypes.string,
            platforms: PropTypes.array
        })
    }).isRequired,
    component: PropTypes.elementType.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.authReducer
});
export default connect(mapStateToProps)(PrivateRoute);
