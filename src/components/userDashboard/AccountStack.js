import React from 'react';
import './accountStack.scss';

const AccountStack = () => {
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
                    TODO: Add accounts here
                </div>

                <h4>
                    Connect your account
                    {/* <button className='btn btn-edit' type='button'>
                        Edit
                    </button> */}
                </h4>
                <div className='db-stack'>
                    <button className='btn' type='button'>
                        <img
                            src='https://img.icons8.com/ios-filled/30/000000/steam-circled.png'
                            alt='Steam Icon'
                        />
                    </button>
                    <button className='btn' type='button'>
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

export default AccountStack;
