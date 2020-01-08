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
                            <img
                                src='https://img.icons8.com/ios-filled/25/000000/steam-circled.png'
                                alt='Steam Icon'
                            />
                            Example
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <img
                                src='https://img.icons8.com/ios-glyphs/25/000000/battle-net.png'
                                alt='Battle.net Icon'
                            />
                            Example#51235
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <img
                                src='https://img.icons8.com/ios-filled/25/000000/epic-games.png'
                                alt='Epic Games Icon'
                            />
                            Example
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileStack;
