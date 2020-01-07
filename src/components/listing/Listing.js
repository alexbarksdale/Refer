import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmallProfile from '../userProfile/SmallProfile';
import './listing.scss';

class Listing extends Component {
    ListingType() {
        const { isTypeFollow, isTypeRegular, listingTitle } = this.props;

        if (isTypeFollow) {
            return (
                <div className='listing-header'>
                    <h2>
                        <span className='refergg'>0</span>
                        Followers
                    </h2>
                    <h2>
                        <span className='refergg'>0</span>
                        Following
                    </h2>
                </div>
            );
        }

        if (isTypeRegular) {
            return (
                <div className='listing-header'>
                    <h2>{listingTitle}</h2>
                </div>
            );
        }

        return (
            <div>You should not see this message. Please add the appropriate props.</div>
        );
    }

    /*
     TODO: When looping through all the followers or profile recommendations you need to
     add <li> SmallProfile </li> in order to fit things correctly
    */

    render() {
        return (
            <div className='listing-type card'>
                <div className='listing-content'>
                    <div className='listings'>
                        {this.ListingType()}
                        <ul>
                            <li>
                                <SmallProfile />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Listing.propTypes = {
    isTypeFollow: PropTypes.bool,
    isTypeRegular: PropTypes.bool,
    listingTitle: PropTypes.string
};

Listing.defaultProps = {
    isTypeFollow: false,
    isTypeRegular: false,
    listingTitle: 'Insert a title as a prop: listingTitle="title_here" '
};

export default Listing;
