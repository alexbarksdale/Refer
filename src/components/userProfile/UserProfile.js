import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfileCard from './UserProfileCard';
import './userProfile.scss';
import { refergg } from '../../axios';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = { user: undefined };
    }

    componentDidMount() {
        const {
            match: { params }
        } = this.props;

        refergg.get(`/user/get/${params.userName}`).then(({ data: user }) => {
            this.setState({ user });
        });
    }

    render() {
        const { user } = this.state;
        return (
            <div className='profile-wrapper'>
                <UserProfileCard user={user} />
            </div>
        );
    }
}

UserProfile.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            userName: PropTypes.string
        })
    })
};

UserProfile.defaultProps = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            userName: 'Default' // ! TODO Make currently authenticated user?
        })
    })
};

export default UserProfile;
