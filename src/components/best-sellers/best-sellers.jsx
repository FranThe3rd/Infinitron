import React from 'react'
import './best-sellers.css'

const BestSellers = () => {

    const BestData = [
        {
            title: 'Best Seller 1',
            gpu: 'This',
            caption: 'This is'
        },
        {
            title: 'Best Seller 2',
            gpu: 'This',
            caption: 'This is'
        },
        {
            title: 'Best Seller 3',
            gpu: 'This',
            caption: 'This is'
        },
        {
            title: 'Best Seller 4',
            gpu: 'This',
            caption: 'This is'
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
