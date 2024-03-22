import React from 'react';

import './home.css';
import mainScreen from '../../assets/home-imgs/mainscreen.png';
import InfoCards from '../../components/information-cards/info-cards';
import ReviewCards from '../../components/review-cards/review-cards';
import BestSellers from '../../components/best-sellers/best-sellers';
import Follow from '../../components/follow/follow';
import SignUp from '../../components/sign-up/sign-up';
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";



export const Home = () => {


    return (
        <div className='home'>
            <img className='main-img' src={mainScreen} alt="" />
            <h1 className='home-h1'>BEST GAMING PCs</h1>
            <h2 className='home-h2'>Optimized For Your Budget</h2>
            <div className='home-bttn-container'>
                <Links className='home-start-bttn-links' to='/start-build-page'>                <button className='home-start-bttn'>START BUILD</button>
</Links>
                <Link className='best-scroll' to="bestsellers" spy={true} smooth={true} duration={1000}>
                    <button className="home-best-bttn">
                        BEST SELLERS
                    </button>
                </Link>
            </div>
            <InfoCards />

            <Links className='home-start-bttn2-links' to='/start-build-page'>
                <button className='home-start-bttn2'>START BUILD</button>
            </Links>


            <ReviewCards />
            <div id='bestsellers'>
                <BestSellers />
            </div>
            <Follow />
            <SignUp />

        </div>
    )
}

export default Home;