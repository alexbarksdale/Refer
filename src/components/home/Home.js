import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import referMock from '../../assets/images/referMock.png';
import './home.scss';

const Home = () => {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <div className='header-desc'>
                    <h1>Create Your Gamestack</h1>
                    <p>
                        Easily
                        <span className='refergg'> refer </span>
                        people to games and platforms you use
                    </p>
                    <button className='btn' type='button'>
                        <Link to='signup'>Create a gamestack</Link>
                    </button>
                </div>
                <div className='header-features'>
                    <div className='feature-container'>
                        <img src={referMock} alt='profile mockup' className='floating' />
                        <div className='shadow' />
                        <div className='feature-content'>
                            <ScrollAnimation animateIn='fadeIn' delay={300}>
                                <div className='feat-item'>
                                    <i className='fas fa-lock' />
                                    <h1>Protected</h1>
                                    <p>
                                        Information about your platforms are secured through their
                                        API. We do not store any information about the account you
                                        connect.
                                    </p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={400}>
                                <div className='feat-item'>
                                    <i className='fas fa-users' />
                                    <h1>Explore and Connect</h1>
                                    <p>
                                        Browse stacks to see what others are playing and connect on
                                        other platforms.
                                    </p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={500}>
                                <div className='feat-item'>
                                    <i className='fas fa-id-card' />
                                    <h1>Customize</h1>
                                    <p>
                                        Customize your profile with games and platforms you're apart
                                        of. Stand out from others by making your profile, yours.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
