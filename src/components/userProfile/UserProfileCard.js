import React from 'react';
import PropTypes from 'prop-types';
import UsernameRefer from './UsernameRefer';
import ProfileStack from '../profileStack/ProfileStack';
import background from '../../assets/images/defaultImage.png';
import avatar from '../../assets/images/defaultAvatar.jpg';
import './userProfileCard.scss';

/*
Notes:s
 - I think the profile header and avatar need to be passed as a prop.
 - May have to change to class component
 TODO: Change default images later
*/

const UserProfileCard = (props) => {
    const { user } = props;

    return (
        <div className='user-profile-card'>
            <div className='profile-content card'>
                <div
                    className='profile-header'
                    style={{
                        background: `url(${background}) center no-repeat`
                    }}
                />

                <div className='profile-info'>
                    <div className='profile-avatar-follow'>
                        <img src={avatar} alt='Profile Avatar' height='120px' width='120px' />
                        <button type='button' className='btn'>
                            <i className='far fa-bookmark' />
                            Follow
                        </button>
                    </div>

                    <div className='profile-user'>
                        <UsernameRefer user={user} />
                        <div className='profile-sub'>
                            <div className='profile-items'>
                                <ul>
                                    <li>
                                        <i className='fas fa-map-marker-alt' />
                                        City, State
                                    </li>
                                    <li>
                                        {/* ! User link goes here */}
                                        <i className='fas fa-link' />
                                        <a href=''>
                                            default.com/
                                            <span className='refergg'>Example</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='profile-description'>
                                <p>
                                    Fugiat velit sint quis occaecat. Laborum tempor tempor qui irure
                                    dolor aliquip non exercitation. Nulla qui voluptate qui non
                                    sint. Minim consequat consequat
                                </p>
                            </div>
                        </div>
                        <ProfileStack />
                    </div>
                </div>
            </div>
        </div>
    );
};

UserProfileCard.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    })
};

UserProfileCard.defaultProps = {
    user: {
        username: 'Default' // ! TODO Use currently authenticated user?
    }
};

export default UserProfileCard;
