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
                            <h1>RTX 4060</h1>
                            <h1>16GB RAM</h1>
                            <h1>1TB SSD</h1>
                            <h1>Intel Core i5</h1>
                          
                        </div>
                        <div className='level-up-good'>
                            <h1>BETTER</h1>
                            <h1>RTX 4070</h1>
                            <h1>32GB RAM</h1>
                            <h1>2TB SSD</h1>
                            <h1>Intel Core i7</h1>
                            
                        </div>
                        <div className='level-up-good'>
                            <h1>BEST</h1>
                            <h1>RTX 4080</h1>
                            <h1>64GB RAM</h1>
                            <h1>4TB SSD</h1>
                            <h1>Intel Core i9</h1>
                            
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
