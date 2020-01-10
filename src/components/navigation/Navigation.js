import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { fetchProfile } from '../actions/authActions';
import history from '../../history';
import AccountDropdown from './AccountDropdown';
import logo from '../../assets/images/refergg.png';
import './navigation.scss';

const options = [
    {
        value: '',
        label: 'Home'
    },
    {
        value: 'browse-stacks',
        label: 'Browse Stack'
    }
];

const Navigation = ({ username, fetchProfile }) => {
    const [displayDropdown, setDisplayDropdown] = useState(true);

    useEffect(() => {
        fetchProfile();
    }, []);

    const navChange = (selectedOption) => {
        history.push(`/${selectedOption.value}`);
    };

    return (
        <>
            <div className='navigation'>
                <div className='container nav-container'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt='ReferGG' />
                        </Link>
                        <button
                            type='button'
                            className='btn'
                            onClick={() => setDisplayDropdown(!displayDropdown)}
                        >
                            <i className='fas fa-bars' />
                        </button>
                    </div>
                    <div
                        className='nav-content'
                        style={{ display: displayDropdown ? 'none' : 'flex' }}
                    >
                        <div className='main-navigation'>
                            <ul className='primary-navigation' style={{ marginLeft: '35px' }}>
                                <li className='nav-item'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <div className='no-access'>
                                    <li className='nav-item'>
                                        <Link to='/browse-stacks' className='not-avail'>
                                            Browse Stacks
                                        </Link>
                                    </li>
                                </div>
                                <li className='nav-item'>
                                    <Link to='/Alex'>Demo</Link>
                                </li>
                            </ul>

                            <Select
                                onChange={navChange}
                                options={options}
                                className='select-navigation'
                                placeholder='Browse...'
                            />
                        </div>

                        <div className='searchbar-container' style={{ marginRight: '25px' }}>
                            <input type='search' name='' placeholder='Coming soon....' />
                        </div>

                        <div className='sub-navigation'>
                            {!username ? (
                                <ul className='secondary-navigation'>
                                    <li className='nav-item'>
                                        <Link to='/login'>Login</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to='/signup'>SignUp</Link>
                                    </li>
                                </ul>
                            ) : (
                                <AccountDropdown />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Navigation.propTypes = {
    username: PropTypes.string
};

Navigation.defaultProps = {
    username: null
};

const mapStateToProps = (state) => {
    return { username: state.authReducer.user.username };
};

export default connect(mapStateToProps, { fetchProfile })(Navigation);
