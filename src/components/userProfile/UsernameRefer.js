import React from 'react';
import PropTypes from 'prop-types';
import './usernameRefer.scss';

/*
Notes:
 - May have to change to class component
*/

const UsernameRefer = (props) => {
    const { usernameSize, linkSize, user } = props;
    return (
        <div className='profile-main'>
            <h1 style={{ fontSize: `${usernameSize}px` }}>{user.username}</h1>
            <p>
                refer.gg/
                <span className='refergg' style={{ fontSize: `${linkSize}px` }}>
                    {/* {user.username.replace('/^\w/', c => c.toUpperCase())} */}
                    {user.username}
                </span>
            </p>
        </div>
    );
};

UsernameRefer.propTypes = {
    usernameSize: PropTypes.number,
    linkSize: PropTypes.number,
    user: PropTypes.shape({
        username: PropTypes.string
    })
};

UsernameRefer.defaultProps = {
    usernameSize: 25,
    linkSize: 16,
    user: {
        username: 'CURRENTPROFILE' // ! TODO Use currently authenticated user?
    }
};

export default UsernameRefer;
