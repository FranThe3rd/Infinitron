import React, {useEffect} from 'react'
import './about-us-page.css'

import aboutPagePcOne from '../../assets/about-us-page-img/about-us-one.png'
import aboutPagePcTwo from '../../assets/about-us-page-img/about-us-two.png'
import aboutPagePcThree from '../../assets/about-us-page-img/about-us-three.png'
import LevelUp from '../../components/level-up/level-up'
import CheckingAbout from '../../components/checking-about/checking-about'
import SignUp from '../../components/sign-up/sign-up'
import { Link } from 'react-router-dom'



const AboutUsPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('appear');
            } else {
              entry.target.classList.remove('appear');
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.disappear');
        hiddenElements.forEach((element) => {
          observer.observe(element);
        });
    
        return () => {
          hiddenElements.forEach((element) => {
            observer.unobserve(element);
          });
        };
      }, []);
    return (
        <div className='about-us-page'>
            <div className='about-us-page-grid'>
                <div className='about-us-page-text-one '>
                    <h1>Our Mission</h1>
                    <p>Our mission is to provide the best financial advice to our clients. We strive to provide the best customer service and to help our clients achieve their financial goals.</p>
                </div>
                <img className='about-us-page-img-one disappear ' src={aboutPagePcThree} alt="" />
                <img  className='about-us-page-img-one disappear ' src={aboutPagePcTwo} alt="" />
                <div className='about-us-page-text-one '>
                    <h1>Maximum Frame Rates</h1>
                    <p>Select your top games and see how they perform using our online PC builder. Our team will build and optimize your PC to deliver the highest frame rates.</p>
                </div>
                <div className='about-us-page-text-one '>
                    <h1>2 Year Warranty</h1>
                    <p>You're protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All systems include parts and labor coverage.</p>
                </div>
                <img  className='about-us-page-img-one disappear' src={aboutPagePcOne} alt="" />
            </div>
            <div className='about-us-page-track'>
                <h1>TRACK YOUR BUILD STATUS</h1>
                <h2>Here at Infinitron we go through a vigorous process to ensure that every custom pc is built to the highest quality. As soon you've placed your order, your PC goes through multiple stages to ensure that we're building the best quality possible.
                    Have your order number and want to track the process of the build?</h2>
                    <Link  className="links"style={{textDecoration: 'none'}} to='/start-build-page'><button className='about-us-track-button'>TRACK PC BUILD </button></Link>
            </div>
            <LevelUp />
            <CheckingAbout />
            <SignUp />

        </div>
    )
}

export default AboutUsPage
