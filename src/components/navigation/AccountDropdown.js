import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authActions';
import avatar from '../../assets/images/defaultAvatar.jpg';
import './accountDropdown.scss';

// eslint-disable-next-line no-shadow
const AccountDropdown = ({ username, logoutUser }) => {
    // references the outer div
    const node = useRef();
    const [dropdown, setDropdown] = useState(false);

    const handleClick = (e) => {
        // returns true if whatever you're clicking is inside the “node” ref.
        if (node.current.contains(e.target)) {
            return;
        }
        setDropdown(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []); // [] = wont have to re-run every time it's clicked

    return (
        <div ref={node}>
            <div className='user-dropdown'>
                <button className='btn' type='button' onClick={() => setDropdown(!dropdown)}>
                    <img src={avatar} alt='Profile Avatar' height='40px' width='40px' />
                    {username}
                    <i
                        className='fas fa-caret-down'
                        style={{ transform: dropdown ? 'rotate(180deg) scaleX(-1)' : 'none' }}
                    />
                </button>

                {dropdown ? (
                    <ul>
                        <Link to={`/${username}`} onClick={() => setDropdown(!dropdown)}>
                            <li className='user-profile'>
                                {username}
                                <p>
                                    refer.gg/
                                    <span className='refergg'>{username}</span>
                                </p>
                            </li>
                        </Link>
                        <div className='drop-divider' />
                        <Link to='/settings' onClick={() => setDropdown(!dropdown)}>
                            <li>
                                <i className='fas fa-cog' />
                                Settings
                            </li>
                        </Link>
                        <div className='drop-divider' />
                        <Link to='/login' onClick={() => logoutUser()}>
                            <li>
                                <i className='fas fa-sign-out-alt' />
                                Log Out
                            </li>
                        </Link>
                    </ul>
                ) : null}
            </div>
        </div>
    );
};

AccountDropdown.propTypes = {
    username: PropTypes.string,
    logoutUser: PropTypes.func.isRequired
};

AccountDropdown.defaultProps = {
    username: null
};

const mapStateToProps = (state) => ({
    username: state.authReducer.user.username
});

export default connect(mapStateToProps, { logoutUser })(AccountDropdown);
