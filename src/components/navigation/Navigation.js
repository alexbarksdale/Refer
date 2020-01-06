import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../utils/Toggle';
import logo from '../../assets/images/refergg.png';
import './navigation.scss';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='main-navigation'>
                    <img src={logo} alt='ReferGG' />
                    <ul className='primary-navigation' style={{ marginLeft: '35px' }}>
                        <li className='nav-item'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/browse-stacks'>Browse Stacks</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/changeLater'>Delete Later</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile'>Delete Later 2</Link>
                        </li>
                    </ul>

                    <Toggle>
                        {({ edit, toggle }) => (
                            <>
                                <button type='button' onClick={toggle}>
                                    Test
                                </button>
                                {edit && <h1>test</h1>}
                            </>
                        )}
                    </Toggle>
                </div>

                <div className='searchbar-container' style={{ marginRight: '25px' }}>
                    <input type='search' name='' placeholder='Search....' />
                </div>

                <div className='sub-navigaton'>
                    <ul className='secondary-navigation'>
                        <li className='nav-item'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signup'>SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
