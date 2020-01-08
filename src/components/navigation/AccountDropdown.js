import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/defaultAvatar.jpg';
import './accountDropdown.scss';

const AccountDropdown = () => {
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
                    Username
                    <i
                        className='fas fa-caret-down'
                        style={{ transform: dropdown ? 'rotate(180deg) scaleX(-1)' : 'none' }}
                    />
                </button>

                {dropdown ? (
                    <ul>
                        {/* Is there a cleaner way to do this (onClick)? */}
                        <Link to='/profile' onClick={() => setDropdown(!dropdown)}>
                            <li className='user-profile'>
                                Username
                                <p>
                                    refer.gg/
                                    <span className='refergg'>username</span>
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
                        <Link to='/' onClick={() => setDropdown(!dropdown)}>
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

export default AccountDropdown;
