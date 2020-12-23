import React from 'react';
import logo from '../../images/logo2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

const Header = () => {
    return (
        <div className='menu'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img className='logo' src={logo} alt=''></img></a>
                
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto"></ul>
                    
                    <span class="navbar-text">
                        <FontAwesomeIcon icon={faShoppingCart} className='font-awesome' />
                                              
                        <button className="header-button">Login</button>
                        <button className="header-button">Sign Up</button>
                    </span>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;