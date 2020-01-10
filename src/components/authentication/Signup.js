import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { refergg } from '../../axios';
import history from '../../history';

const td = new Date().getFullYear();

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be 3 or more characters')
        .max(16, 'Username must not exceed 16 characters')
        .required('Username required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email required'),
    password: Yup.string()
        .min(6, 'Password must be atleast 6 characters')
        .max(256, 'Password cannot exceed 256 characters')
        .required('Password required'),
    dobDay: Yup.number()
        .min(1, 'Invalid day')
        .max(31, 'Invalid day')
        .required('Day is required'),
    dobMonth: Yup.number()
        .min(0, 'Invalid month')
        .max(11, 'Invalid month')
        .required('Month is required'),
    dobYear: Yup.number()
        .max(td, 'Invalid year')
        .required('Year is required')
});

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actions: {}
        };
    }

    onSubmit = (values, actions) => {
        this.state.actions = actions;
        actions.setStatus(undefined);

        const { username, email, password, dobDay, dobMonth, dobYear } = values;
        const dob = new Date(dobYear, dobMonth, dobDay);

        refergg
            .post('/user/signup', { username, email, password, dob })
            .then((resp) => {
                // TODO: Send message below from backend
                toast.success(
                    'Successfully created an account. Please check your email for verification.'
                );
                history.push('/login');
            })
            .catch((err) => {
                const messages = [];
                console.log(err.response);
                Object.keys(err.response.data.errors).forEach((key) => {
                    messages.push(`${err.response.data.errors[key].message}`);
                });
                actions.setStatus({
                    invalid: messages
                });
                setTimeout(() => {
                    actions.setStatus(undefined);
                }, 5000);
            });
    };

    test = (status) =>
        status.invalid.map((value, i) => (
            <li key={value}>
                <div style={{}} className='form-error'>
                    {value}
                </div>
            </li>
        ));

    test = (status) =>
        status.invalid.map((value, i) => (
            <li key={value}>
                <div style={{}} className='form-error'>
                    {value}
                </div>
            </li>
        ));

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        dobDay: '',
                        dobMonth: 0,
                        dobYear: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, actions) => {
                        this.onSubmit(values, actions);
                    }}
                >
                    {({ errors, touched, status }) => (
                        <Form>
                            <ul>{status ? this.test(status) : null}</ul>

                            <div className='form-group'>
                                <div className='input-container'>
                                    {errors.username && touched.username ? (
                                        <div className='form-error'>{errors.username}</div>
                                    ) : null}
                                    <Field type='text' name='username' placeholder='Username' />
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
                                <div className='input-container'>
                                    {errors.email && touched.email ? (
                                        <div className='form-error'>{errors.email}</div>
                                    ) : null}
                                    <Field type='email' name='email' placeholder='Email' />
                                </div>
                            </div>

                            <div className='form-group'>
                                <div className='sub-container'>
                                    <h3>Date of Birth</h3>
                                    {errors.dobDay && touched.dobDay ? (
                                        <div className='form-error'>{errors.dobDay}</div>
                                    ) : null}
                                    {errors.dobMonth && touched.dobMonth ? (
                                        <div className='form-error'>{errors.dobMonth}</div>
                                    ) : null}
                                    {errors.dobYear && touched.dobYear ? (
                                        <div className='form-error'>{errors.dobYear}</div>
                                    ) : null}
                                    <Field
                                        as='select'
                                        name='dobMonth'
                                        className='date-selector'
                                        placeholder='Month'
                                    >
                                        <option value='0'>January</option>
                                        <option value='1'>February</option>
                                        <option value='2'>March</option>
                                        <option value='3'>April</option>
                                        <option value='4'>May</option>
                                        <option value='5'>June</option>
                                        <option value='6'>July</option>
                                        <option value='7'>August</option>
                                        <option value='8'>September</option>
                                        <option value='9'>October</option>
                                        <option value='10'>November</option>
                                        <option value='11'>December</option>
                                    </Field>
                                    <Field type='text' name='dobDay' placeholder='Day' />
                                    <Field type='text' name='dobYear' placeholder='Year' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <button type='submit'>Sign Up</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <p>
                    Already have an account?
                    <Link to='/login' className='refergg'>
                        {' '}
                        LOG IN
                    </Link>
                </p>
            </div>
        );
    }
}

export default Signup;
