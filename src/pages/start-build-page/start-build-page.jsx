import React from 'react';
import './start-build-page.css'

const StartBuild = () => {
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
                <div className='start-build-showcase'>
                    
                </div>
            </div>



        </div>
    )

}

export default StartBuild;