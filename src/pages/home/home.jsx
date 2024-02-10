import React from 'react';
import './home.css';
import mainScreen from '../../assets/home-imgs/mainscreen.png';

export const Home = () => {
    return (
        <div className='home'>
            <img className='main-img' src={mainScreen} alt="" />
        </div>
    )
}

export default Home;