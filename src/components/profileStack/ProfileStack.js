import React from 'react';
import PropTypes from 'prop-types';
import './profileStack.scss';

//! clean up later
const ProfileStack = ({ user }) => {
    return (
        <div className='profile-stack'>
            {user.platforms && user.platforms.length > 0 && <h3>Profile Stack</h3>}
            <div className='stacks'>
                {/* There will be different ways a user will get access to an account.
                 * Either a link to the account like steam or click to copy.
                 * TODO: Display if there is no stack.
                 */}

                {/* <p className='no-stack'>No stack available.</p> */}
                <ul>
                    {user.platforms && user.platforms.length > 0 && (
                        <li>
                            <a
                                href={
                                    user.platforms && user.platforms.length > 0
                                        ? `${user.platforms[0].url}`
                                        : ''
                                }
                            >
                                <img
                                    src='https://img.icons8.com/ios-filled/25/000000/steam-circled.png'
                                    alt='Steam Icon'
                                />
                                {user.platforms && user.platforms.length > 0
                                    ? `${user.platforms[0].name}`
                                    : 'Default'}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

ProfileStack.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        platforms: PropTypes.array
    })
};
// ! TODO Use currently authenticated user?
ProfileStack.defaultProps = {
    user: {
        username: 'Default',
        platforms: []
    }
};

export default ProfileStack;
