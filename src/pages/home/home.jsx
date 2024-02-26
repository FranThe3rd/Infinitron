import React from 'react';
import './home.css';
import mainScreen from '../../assets/home-imgs/mainscreen.png';
import InfoCards from '../../components/information-cards/info-cards';
import ReviewCards from '../../components/review-cards/review-cards';
import BestSellers from '../../components/best-sellers/best-sellers';
import Follow from '../../components/follow/follow';
import SignUp from '../../components/sign-up/sign-up';

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
            <ReviewCards />
            <BestSellers />
            <Follow />
            <SignUp />

        </div>
    )
}

export default Home;