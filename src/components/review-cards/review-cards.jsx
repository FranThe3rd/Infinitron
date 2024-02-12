import React from 'react';
import './review-cards.css';

export const ReviewCards = () => {

    const reviewData = [

        {
            Image: 'https://www.cyberpowerpc.com/images/cs/hero/hero-1.jpg',
            Text: 'CyberPowerPC is a global leader of custom gaming pcs, custom gaming laptops, small form factor pcs, desktop workstations, 4K Gaming systems, and Syber Gaming consoles.',
            Reviewer: 'CyberPowerPC'
        },
        {
            Image: 'https://www.cyberpowerpc.com/images/cs/hero/hero-1.jpg',
            Text: 'This is good pc',
            Reviewer: 'Cheese'
        },
        {
            Image: 'https://www.cyberpowerpc.com/images/cs/hero/hero-1.jpg',
            Text: 'This is good pc',
            Reviewer: 'Bob Ross'
        }

    ]

    return (
        <div className='review-cards'>
            <h1 className='review-title'>WE BUILD FOR THE BEST</h1>
            <div className='review-card'>
                <img className='review-img' src='https://www.cyberpowerpc.com/images/cs/hero/hero-1.jpg' alt="" />
                <h2 className='review-h2'>CyberPowerPC</h2>
                <p className='review-p'>CyberPowerPC is a global leader of custom gaming pcs, custom gaming laptops, small form factor pcs, desktop workstations, 4K Gaming systems, and Syber Gaming consoles.</p>
            </div>


        </div>
    )
}

export default ReviewCards;