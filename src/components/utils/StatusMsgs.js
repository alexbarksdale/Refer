import React from 'react';
import { connect } from 'react-redux';
import './statusMsgs.scss';

const AuthMsgs = (state) => {
    return (
        <div className='status-container'>
            <div className={`status-msg ${state.statusMsg.messageType}`}>
                <h4>{state.statusMsg.message}</h4>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { statusMsg: state.statusMsgReducer };
};

export default connect(mapStateToProps)(AuthMsgs);
