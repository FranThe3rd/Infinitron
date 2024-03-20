import React from 'react';
import './start-build-page.css'

import i5 from '../../assets/specs-imgs/i5-cpu.png'
import ram16 from '../../assets/specs-imgs/16gb-ram.png'
import cooler from '../../assets/specs-imgs/cooler.png'
import pcCase from '../../assets/specs-imgs/pc-case.png'

const StartBuild = () => {

    const specs = [
        {
            name: 'INTEL CORE i5 10th GEN',
            img: i5,
            price: 200,
        },
         {
            name: '16GB DDR',
            img: ram16,
            price: 100,
         },
         {
            name: 'COOLER MASTER HYPER 212 EVO',
            img: cooler,
            price: 50,
         },
         {
            name: 'NZXT H510',
            img: pcCase,
            price: 129,

         }


        ]






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

                </div>
                <div className='start-build-specs'>

                    {
                        specs.map((spec,index) => {
                            return (
                                <div key={index} className='specs-info'>
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