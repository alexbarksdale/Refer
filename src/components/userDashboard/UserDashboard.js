import React from 'react';
import AccountSettings from './AccountSettings';
import AccountStack from './AccountStack';
import './userDashboard.scss';

const UserDashboard = () => {
    return (
        <div>
            <div className='user-dashboard'>
                <div className='db-content card'>
                    <h2>Account Settings</h2>
                    <AccountSettings />
                </div>

                <div className='db-content card'>
                    <h2>Customize Your Stack</h2>
                    <AccountStack />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
