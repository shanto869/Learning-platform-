import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-banner'>
            <div className='home-content'>
                <h1>Find The Right Learning Path For You</h1>
                <p>Match your goals to our services, explore your options and map out your path to success.</p>
                <Link to='/courses'>
                    <button className='btn px-5 py-3 text-white border-white button-style rounded-pill'>Get Started Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;