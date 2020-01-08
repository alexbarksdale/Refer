import React from 'react';
import Toggle from '../utils/Toggle';
import './accountSettings.scss';

const AccountSettings = () => {
    const EditBtn = (toggleBtn) => {
        return (
            <button className='btn btn-edit' type='button' onClick={toggleBtn}>
                Edit
            </button>
        );
    };

    const EditPropertiesForm = (name, defaultValue, toggle) => {
        return (
            <div className='edit-property'>
                <form action=''>
                    <input
                        type={name === `${name}` ? `${name}` : 'text'}
                        name={name}
                        className='editable-property'
                        defaultValue={defaultValue}
                    />
                </form>
                <button className='btn btn-submit' type='button'>
                    <i className='fas fa-check' />
                </button>
                <button className='btn btn-cancel' type='button' onClick={toggle}>
                    <i className='fas fa-ban' />
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className='db-property'>
                <Toggle>
                    {({ dropdown, toggle }) => (
                        <div>
                            <h4>
                                Display Name
                                {EditBtn(toggle)}
                            </h4>
                            <p>DisplayName</p>
                            {dropdown && EditPropertiesForm('displayName', 'DisplayName', toggle)}
                        </div>
                    )}
                </Toggle>
                <div className='db-divider' />
            </div>
            <div className='db-property'>
                <Toggle>
                    {({ dropdown, toggle }) => (
                        <div>
                            <h4>
                                Username
                                {EditBtn(toggle)}
                            </h4>
                            <p>Username</p>
                            {dropdown && EditPropertiesForm('username', 'Username', toggle)}
                        </div>
                    )}
                </Toggle>
                <div className='db-divider' />
            </div>
            <div className='db-property'>
                <Toggle>
                    {({ dropdown, toggle }) => (
                        <div>
                            <h4>
                                Email
                                {EditBtn(toggle)}
                            </h4>
                            <p>example@gmail.com</p>
                            {dropdown && EditPropertiesForm('email', 'example@gmail.com', toggle)}
                        </div>
                    )}
                </Toggle>
                <div className='db-divider' />
            </div>
            <div className='db-property'>
                <Toggle>
                    {({ dropdown, toggle }) => (
                        <div>
                            <h4>
                                Password
                                {EditBtn(toggle)}
                            </h4>
                            <p>************</p>
                            {dropdown && EditPropertiesForm('password', '************', toggle)}
                        </div>
                    )}
                </Toggle>
                <div className='maintenance'>
                    <h3>
                        <i className='fas fa-tools' />
                        Currently under construction
                        <i className='fas fa-tools' />
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
