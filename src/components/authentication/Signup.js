import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { refergg } from '../../axios';
import history from '../../history';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            dobDay: 0,
            dobMonth: 0,
            dobYear: 0
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, dobDay, dobMonth, dobYear } = this.state;
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
                Object.keys(err.response.data.errors).forEach((key) => {
                    toast.error(err.response.data.errors[key].message);
                });
            });
    };

    render() {
        const { username, email, password } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <div className='input-container'>
                            <input
                                type='text'
                                required
                                name='username'
                                placeholder='Enter your username'
                                value={username}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='input-container'>
                            <input
                                type='text'
                                required
                                name='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='input-container'>
                            <input
                                type='password'
                                required
                                name='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='sub-container'>
                            <h3>Date of Birth</h3>
                            <select
                                name='dobMonth'
                                id=''
                                className='date-selector'
                                onChange={this.onChange}
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
                            </select>
                            <input
                                type='text'
                                name='dobDay'
                                placeholder='Day'
                                onChange={this.onChange}
                            />
                            <input
                                type='text'
                                name='dobYear'
                                placeholder='Year'
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;
