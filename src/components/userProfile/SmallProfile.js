import React from 'react';
import avatar from '../../assets/images/defaultAvatar.jpg';
import UsernameRefer from './UsernameRefer';
import './smallProfile.scss';

// TODO: Make image size customizable

const SmallProfile = () => {
    return (
        <a href='' className='small-profile'>
            <img src={avatar} alt='Profile Avatar' height='50px' width='50px' />
            <UsernameRefer usernameSize={18} />
        </a>
    );
};

export default SmallProfile;
