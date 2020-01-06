import React from 'react';
import { Router, Link } from 'react-router-dom';
import history from '../../history';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='branding'>
                    <h3>&copy; ReferGG</h3>
                </div>
                <Router history={history}>
                    <div className='footer-items'>
                        <h3>Resources</h3>
                        <ul>
                            <li>
                                <Link to=''>Help Center</Link>
                            </li>
                            <li>
                                <Link to=''>Terms of Service</Link>
                            </li>
                            <li>
                                <Link to=''>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </div>
        </footer>
    );
};

export default Footer;
