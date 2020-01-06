import React, { Component } from 'react';
import { refergg } from '../../axios';
import './announcement.scss';

const Announcement = class Announcement extends Component {
    constructor() {
        super();

        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        refergg.get('/announce/getAnnouncement').then((res) => {
            const announcement = res.data;
            this.setState({ message: announcement.message });
        });
    }

    render() {
        const { message } = this.state;
        return (
            <div className='announcement'>
                <h1 className='announcement-type' style={{ marginRight: '15px' }}>
                    News
                </h1>
                <p className='announcement-message'>{message}</p>
            </div>
        );
    }
};

export default Announcement;
