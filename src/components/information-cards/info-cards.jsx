import React from 'react';
import './info-cards.css';

const cards = [
  {
    title: 'Low Pricing',
    text: 'We believe in bringing custom gaming computers to the masses, that\'s why we only charge a small build fee and don\'t cut corners on quality.'
  },
  {
    title: 'Max Frame Rates', 
    text: 'Select your top games and see how they perform using our online PC builder. Our team will build and optimize your gaming PC to deliver the highest frame rates.'
  },
  {
    title: '2 Years Warranty',
    text: 'You\'re protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All gaming desktops include parts and labor coverage.'
  }
];

export const InfoCards = () => (
  <div className='info-container'>
    <div className='info-cards'>
      {cards.map(card => (
        <div key={card.title} className='info-card'>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default InfoCards;