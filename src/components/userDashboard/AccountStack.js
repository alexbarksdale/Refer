import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import './accountStack.scss';

const oAuthSteam = (user) => {
    const popupWindow = window.open(
        `auth/steamlogin/${user.email}`,
        '_blank',
        'width=800, height=600'
    );
    if (window.focus) popupWindow.focus();
};

const AccountStack = ({ user }) => {
    console.log(user);
    return (
        <div>
            <div className='db-property'>
                <h4>
                    Current Stack
                    <button className='btn btn-edit' type='button'>
                        Edit
                    </button>
                </h4>
                <div className='db-stack' style={{ marginBottom: '20px' }}>
                    {user.platforms && user.platforms.length > 0 ? (
                        <button className='btn' type='button'>
                            <img
                                src='https://img.icons8.com/ios-filled/30/000000/steam-circled.png'
                                alt='Steam Icon'
                            />
                        </button>
                    ) : (
                        <p>No connected accounts</p>
                    )}
                </div>

                <h4>
                    Connect your account
                    {/* <button className='btn btn-edit' type='button'>
                        Edit
                    </button> */}
                </h4>
                <div className='db-stack'>
                    <button className='btn' type='button' onClick={() => oAuthSteam(user)}>
                        <img
                            src='https://img.icons8.com/ios-filled/30/000000/steam-circled.png'
                            alt='Steam Icon'
                        />
                    </button>

                    {/* <a className='btn' type='button' href='auth/steam'>
                    </a> */}
                    <button className='btn disabled' type='button'>
                        <img
                            src='https://img.icons8.com/ios-glyphs/30/000000/battle-net.png'
                            alt='Battle.net Icon'
                        />
                    </button>
                    <button className='btn disabled' type='button'>
                        <img
                            src='https://img.icons8.com/ios-filled/30/000000/epic-games.png'
                            alt='Epic Games Icon'
                        />
                    </button>
                    <button className='btn disabled' type='button'>
                        <img
                            src='https://img.icons8.com/android/30/000000/twitter.png'
                            alt='Twitter Icon'
                        />
                    </button>
                    <button className='btn disabled' type='button'>
                        <img
                            src='https://img.icons8.com/ios-filled/30/000000/twitch.png'
                            alt='Twitch Icon'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

AccountStack.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        username: PropTypes.string,
        displayname: PropTypes.string,
        dob: PropTypes.string,
        platforms: PropTypes.array
    }).isRequired
};

const mapStateToProps = (state) => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, { loginUser })(AccountStack);
