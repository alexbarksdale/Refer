import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import './usernameRefer.scss';

const UsernameRefer = (props) => {
    const { usernameSize, linkSize, user } = props;

    return (
        <div className='profile-main'>
            <ReactTooltip place='bottom' />
            <h1 style={{ fontSize: `${usernameSize}px` }}>{user.username}</h1>
            <div data-tip='Copied' data-event='click'>
                <button
                    className='btn'
                    type='button'
                    data-tip='Click to copy'
                    value={`refer.gg/${user.username}`}
                >
                    refer.gg/
                    <span className='refergg' style={{ fontSize: `${linkSize}px` }}>
                        {/* {user.username.replace('/^\w/', c => c.toUpperCase())} */}
                        {user.username}
                    </span>
                </button>
            </div>
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
        username: 'Example' // ! TODO Use currently authenticated user?
    }
};

export default UsernameRefer;
