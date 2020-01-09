import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import { loginUser } from '../actions/authActions';
import history from '../../history';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email required'),
    password: Yup.string()
        .max(256, 'Password cannot exceed 256 characters')
        .required('Password required')
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actions: {}
        };
    }

    componentDidUpdate() {
        const { auth, errors } = this.props;
        const { actions } = this.state;
        if (auth.isAuthenticated) {
            history.push(`/${auth.user.username}`);
        }

        if (!isEmpty(errors)) {
            actions.setStatus({
                password: 'Invalid password'
            });
            setTimeout(() => {
                console.log('chewty');
                actions.setStatus(undefined);
            }, 5000);
        }
    }

    onSubmit = (values, actions) => {
        this.state.actions = actions;
        actions.setStatus(undefined);
        // eslint-disable-next-line no-shadow
        const { loginUser } = this.props;
        loginUser({ email: values.email, password: values.password });
    };

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, actions) => {
                        this.onSubmit(values, actions);
                    }}
                >
                    {({ errors, touched, status }) => (
                        <Form>
                            {status && status.password ? (
                                <div className='form-error'>{status.password}</div>
                            ) : null}

                            <div className='form-group'>
                                <div className='input-container'>
                                    {errors.email && touched.email ? (
                                        <div className='form-error'>{errors.email}</div>
                                    ) : null}
                                    <Field type='email' name='email' placeholder='Email' />
                                </div>
                            </div>

                            <div className='form-group'>
                                <div className='input-container'>
                                    {errors.password && touched.password ? (
                                        <div className='form-error'>{errors.password}</div>
                                    ) : null}
                                    <Field type='password' name='password' placeholder='Password' />
                                </div>
                            </div>

                            <div className='form-group'>
                                <button type='submit'>Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <p>
                    New to Refer?
                    <Link to='/signup' className='refergg'>
                        {' '}
                        SIGN UP
                    </Link>
                </p>
                <p>
                    Forgot your
                    {/* eslint-disable-next-line */}
                    <span className='refergg'> PASSWORD</span>?
                </p>
            </div>
        );
    }
}

// email: req.body.email,
//         password: req.body.password,
//         username: req.body.username,
//         displayname: req.body.username,
//         dob: req.body.dob
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
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
    errors: PropTypes.shape({
        error: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    errors: state.errorReducer
});

export default connect(mapStateToProps, { loginUser })(Login);
