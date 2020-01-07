import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { refergg } from '../../axios';
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
    onSubmit = (values, actions) => {
        actions.setStatus(undefined);
        refergg
            .post('/user/login', { email: values.email, password: values.password })
            .then((resp) => {
                if (resp.status === 200) {
                    history.push('/');
                }
            })
            .catch((err) => {
                actions.setStatus({
                    password: 'Invalid password'
                });
                setTimeout(() => {
                    actions.setStatus(undefined);
                }, 5000);
            });
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

export default Login;
