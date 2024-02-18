import React from 'react'
import './best-sellers.css'

const BestSellers = () => {

    const BestData = [
        {
            title: 'GOOD',
            gpu: 'RTX 4060',
            caption: 'Level up your gaming experience without breaking the bank!'
        },
        {
            title: 'BETTER',
            gpu: 'RTX 4070 SUPER',
            caption: 'Perfect gaming PC for high settings, max resolutions, and streaming.'
        },
        {
            title: 'BEST',
            gpu: 'RTX 4080 SUPER',
            caption: 'Maximum performance. Experience high frame rates at ultra settings.'
        },
        {
            title: 'ULTIMATE',
            gpu: 'RTX 4090',
            caption: 'Delivers the ultimate experience for gamers and content creators.'
        }
        
    ]

  return (
    <div className='best-sellers'>
        <h1 className='best-h1'>Best Sellers</h1>
        <div className='best-container'>
        {
            BestData.map((best, index) => { 
                return (
                    <div className='best-sellers-card' key={index}>
                        <h2 className='best-h2'>{best.title}</h2>
                        <h3 className='best-h3'>{best.gpu}</h3>
                        <p className='best-p'>{best.caption}</p>
                    </div>
                )
        })
        }
        
        </div>
        
    </div>
  )
}

export default BestSellers
