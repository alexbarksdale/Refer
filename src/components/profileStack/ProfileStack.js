import React from 'react';
import './profileStack.scss';

const ProfileStack = () => {
    return (
        <div className='profile-stack'>
            <h3>Profile Stack</h3>
            <div className='stacks'>
                {/* There will be different ways a user will get access to an account.
                 * Either a link to the account like steam or click to copy.
                 * TODO: Display if there is no stack.
                 */}

                {/* <p className='no-stack'>No stack available.</p> */}
                <ul>
                    <li>
                        <a href=''>
                            <i className='fab fa-steam' />
                            Username
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <i className='fab fa-steam' />
                            Username
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileStack;
