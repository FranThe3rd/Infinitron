import React from 'react';
import './home.css';
import mainScreen from '../../assets/home-imgs/mainscreen.png';
import InfoCards from '../../components/information-cards/info-cards';

export const Home = () => {
    return (
        <div className='home'>
            <img className='main-img' src={mainScreen} alt="" />
            <h1 className='home-h1'>BEST GAMING PCs</h1>
            <h2 className='home-h2'>Optimized For Your Budget</h2>
            <div className='home-bttn-container'>
                <button className='home-start-bttn'>START BUILD</button>
                <button className='home-best-bttn'>BEST SELLERS</button>
            </div>
            <InfoCards />
            <button className='home-start-bttn2'>START BUILD</button>
        </div>
    )
}

export default Home;