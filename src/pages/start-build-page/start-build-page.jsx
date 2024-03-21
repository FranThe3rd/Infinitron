import React from 'react';
import './start-build-page.css'

import i5 from '../../assets/specs-imgs/i5-cpu.png'
import ram16 from '../../assets/specs-imgs/16gb-ram.png'
import cooler from '../../assets/specs-imgs/cooler.png'
import pcCase from '../../assets/specs-imgs/pc-case.png'
import motherboard from '../../assets/specs-imgs/motherboard.png'
import rtx4060 from '../../assets/specs-imgs/rtx4060.png'
import windows10 from '../../assets/specs-imgs/windows10.png'
import watts750 from '../../assets/specs-imgs/750watts.png'
import tb1 from '../../assets/specs-imgs/1TB.png'
import fans from '../../assets/specs-imgs/fans.png'
import gamingPc from '../../assets/specs-imgs/GamingPC.png'

const StartBuild = () => {

    const specs = [
        {
            name: 'INTEL CORE i5 10th GEN',
            img: i5,
            price: 250.99, // Adjusted price
        },
        {
            name: '16GB DDR',
            img: ram16,
            price: 79.99, // Adjusted price
        },
        {
            name: 'COOLER MASTER HYPER 212 EVO',
            img: cooler,
            price: 39.99, // Adjusted price
        },
        {
            name: 'NZXT H510',
            img: pcCase,
            price: 99.99, // Adjusted price
        },
        {
            name: 'ASUS PRIME Z490-P',
            img: motherboard,
            price: 119.99, // Adjusted price
        },
        {
            name: 'NVIDIA RTX 4060',
            img: rtx4060,
            price: 599.99, // Adjusted price
        },
        {
            name: 'WINDOWS 10',
            img: windows10,
            price: 109.99, // Adjusted price
        },
        {
            name: '750W ATX 80 PLUS GOLD',
            img: watts750,
            price: 179.99, // Adjusted price
        },
        {
            name: '1TB SSD',
            img: tb1,
            price: 119.99, // Adjusted price
        },
        {
            name: 'RGB FANS',
            img: fans,
            price: 49.99, // Adjusted price
        },
    ];







    return (
        <div className='start-build-page'>
            <div className='start-build-grid'>
                <h1 className='start-build-h1'>Your Optimized Build.</h1>
                <div className='start-bttn-container'>
                    <button className='start-build-bttn-contact'>Save & Email</button>
                    <button className='start-build-bttn-checkout'>Checkout</button>
                </div>
            </div>
            <div className='start-build-type-grid'>
                <button>Good</button>
                <button>Better</button>
                <button>Best</button>
                <button>Ultimate</button>
            </div>

            <div className='start-build-specs-grid'>

                <div className='start-build-showcase'>
                    <div className='showing-the-pc'>
                        <img src={gamingPc} alt="" />
                    </div>
                    <div className='showing-the-pc-info'>
                        <div><p>Components Cost</p>
                            <h2>$1609.90</h2></div>
                        <div><p>Per Month As Low As</p>
                            <h2>$41.30</h2>
                        </div>
                        <div><p>Check Our Customers Reviews</p>
                            <button className='customer-bttn'>Reviews</button></div>
                    </div>


                </div>


                <div className='start-build-specs'>

                    {
                        specs.map((spec, index) => {
                            return (
                                <div key={index} className={`specs-info${index === 0 ? ' no-border-top' : ''}`}>
                                    <img src={spec.img} alt="" />
                                    <p>{spec.name}</p>
                                    <p><strong>${spec.price}</strong></p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>



        </div>
    )

}

export default StartBuild;