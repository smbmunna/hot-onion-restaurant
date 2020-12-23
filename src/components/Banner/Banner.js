import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <h1>Best Food Waiting For Your Belly</h1>
            <div class="d-flex justify-content-center">
                <form class='form-inline'>
                    <input class="form-control" type="text" placeholder="Search Food Items"></input>
                    <input type='submit' className='search-btn' value='Search'></input>
                </form>
            </div>
            
        </div>
    );
};

export default Banner;