import React from 'react';
import './info-cards.css';

export const InfoCards = () => {
    return (
        <div className='info-cards'>
            <div className='info-card'>
                <h2>Low Pricing</h2>
                <p>We believe in bringing custom gaming computers to the masses, that's why we only charge a small build fee and don't cut corners on quality.</p>
            </div>
            <div className='info-card'>
                <h2>Max Frame Rates</h2>
                <p>Select your top games and see how they perform using our online PC builder. Our team will build and optimize your gaming PC to deliver the highest frame rates.</p>
            </div>
            <div className='info-card'>
                <h2>2 Years Warranty</h2>
                <p>You're protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All gaming desktops include parts and labor coverage.</p>
            </div>
        </div>
    )
}

export default InfoCards;