import React from 'react'
import './level-up.css'
import levelUpImage from '../../assets/about-us-page-img/level-up-one.png'



const LevelUp = () => {



    return (
        <div className='level-up'>
            <div className="level-up-grid">
                <div className='level-up-one'>
                    <h1>LEVEL UP YOUR PC!</h1>
                    <p>Our team of in-house gamers will get you back up and running if you run into any issues. All systems include parts and labor coverage.</p>
                    <button className='level-up-start-bttn'>START YOUR BUILD</button>
                    <img className='level-up-image' src={levelUpImage} alt="" />
                </div>
                <div className='level-up-one'>
                    <h1>NOT SURE WHERE TO START?</h1>
                    <p>Whether you are just starting out or a serious gamer, our PCs are built to the highest standard, to give you the best gaming experience. Pick your budget and view the default configuration. Looking for a little more? Why not customize it.</p>
                    <div className='level-up-mini-grid'>
                        <div className='level-up-good'>

                            <h1>GOOD</h1>
                            <h2>"Embark on your gaming journey with the Infinitron Quantum Nova Gaming PC, equipped with the formidable RTX 4060 graphics card. Engineered by Infinitron to deliver reliable gaming performance at an accessible price point, the Quantum Nova is powered by a robust CPU and optimized for smooth gameplay at 1080p resolution. With sleek design and efficient cooling, the Quantum Nova ensures an immersive gaming experience for entry-level gamers.

                                "</h2>
                        </div>
                        <div className='level-up-good'>
                            <h1>BETTER</h1>
                            <h2>"Take your gaming to the next level with the Infinitron Quantum Eclipse Gaming PC, featuring the powerful RTX 4070 Super graphics card. Designed for enthusiasts seeking exceptional performance, the Quantum Eclipse combines cutting-edge technology with high-resolution gaming capabilities. With Infinitron's attention to detail and advanced cooling solutions, the Quantum Eclipse delivers a seamless gaming experience for discerning gamers who demand top-tier performance.

                                "
                            </h2>
                        </div>
                        <div className='level-up-good'>
                            <h1>BEST</h1>
                            <h2>"Experience gaming supremacy with the Infinitron Quantum Titan Gaming PC, showcasing the elite RTX 4080 Super graphics card. Crafted to dominate the gaming landscape, the Quantum Titan sets the standard for premium gaming experiences. With unparalleled performance and stunning visual fidelity, this powerhouse is designed for gamers who demand the absolute best. Infinitron's commitment to innovation and quality shines through in every aspect of the Quantum Titan, making it the ultimate choice for elite gamers worldwide.
                                "
                            </h2>
                        </div>
                        <h3 className='level-up-good-h3'>Starting at $1,280
                            Or as low as $41.30 monthly*</h3>
                        <h3 className='level-up-good-h3'>Starting at $1,799
                            Or as low as $58.05 monthly*</h3>
                        <h3 className='level-up-good-h3'>Starting at $2,399
                            Or as low as $77.41 monthly*</h3>

                        <button className='level-up-view-bttn'>VIEW BUILD</button>
                        <button className='level-up-view-bttn'>VIEW BUILD</button>
                        <button className='level-up-view-bttn'>VIEW BUILD</button>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default LevelUp
