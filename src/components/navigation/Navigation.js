import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import logo from '../../assets/images/refergg.png';
import history from '../../history';
import './navigation.scss';

const options = [
    {
        value: '',
        label: 'Home'
    },
    {
        value: 'browse-stacks',
        label: 'Browse Stack'
    },
    {
        value: 'changeLater',
        label: 'Delete Later'
    },
    {
        value: 'profile',
        label: 'Delete Later 2'
    }
];

const Navigation = () => {
    const [display, setDisplay] = useState(true);

    const navChange = (selectedOption) => {
        history.push(`/${selectedOption.value}`);
    };

    return (
        <>
            <div className='navigation'>
                <div className='container nav-container'>
                    <div className='nav-header'>
                        <img src={logo} alt='ReferGG' />
                        <button type='button' className='btn' onClick={() => setDisplay(!display)}>
                            <i className='fas fa-bars' />
                        </button>
                    </div>
                    <div className='nav-content' style={{ display: display ? 'none' : 'flex' }}>
                        <div className='main-navigation'>
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

                            <Select
                                onChange={navChange}
                                options={options}
                                className='select-navigation'
                                placeholder='Browse...'
                            />
                        </div>

                        <div className='searchbar-container' style={{ marginRight: '25px' }}>
                            <input type='search' name='' placeholder='Search....' />
                        </div>

                        <div className='sub-navigation'>
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
            </div>
        </>
    );
};

export default Navigation;
