import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



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
import gamingPc2 from '../../assets/specs-imgs/GamingPC2.png'
import gamingPc3 from '../../assets/specs-imgs/GamingPC3.png'
import gamingPc4 from '../../assets/specs-imgs/GamingPC4.png'
import SignUp from '../../components/sign-up/sign-up'

const StartBuild = () => {

    const specs = [
        {
            name: 'INTEL CORE i5 10th GEN',
            img: i5,
            price: 250.99, 
            
        },
        {
            name: '16GB DDR',
            img: ram16,
            price: 79.99, 
        },
        {
            name: 'COOLER MASTER HYPER 212 EVO',
            img: cooler,
            price: 39.99, 
        },
        {
            name: 'NZXT H510',
            img: pcCase,
            price: 99.99, 
        },
        {
            name: 'ASUS PRIME Z490-P',
            img: motherboard,
            price: 119.99, 
        },
        {
            name: 'NVIDIA RTX 4060',
            img: rtx4060,
            price: 599.99, 
        },
        {
            name: 'WINDOWS 10',
            img: windows10,
            price: 109.99, 
        },
        {
            name: '750W ATX 80 PLUS GOLD',
            img: watts750,
            price: 179.99, 
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

    const PC = [
        {
            img: gamingPc,
        },
        {
            img: gamingPc2,
        },
        {
            img: gamingPc3,
        },
        {
            img: gamingPc4,
        }
    ];

    const [priceMultiplier, setPriceMultiplier] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [choosePC, setChoosePC] = useState(0);


    const calculateTotalPrice = () => {
        let total = 0;
        specs.forEach(spec => {
            const price = spec.price * priceMultiplier;
            total += price;
        });
        setTotalPrice(total);
    };

    const handleButtonClick = (multiplier) => {
        setPriceMultiplier(multiplier);
    };

    const handleChoosePC = (index) => {
        setChoosePC(index);
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [priceMultiplier]);

   

 






    return (
        <div className='start-max-container'>
        <div className='start-build-page'>

            <div className='start-build-grid'>
                <h1 className='start-build-h1'>Your Optimized Build.</h1>
                <div className='start-bttn-container'>
                    <button className='start-build-bttn-contact'>Save & Email</button>
                    <button className='start-build-bttn-checkout'>Checkout</button>
                </div>
            </div>
            <div className='start-build-type-grid'>
                <button onClick={() => {handleButtonClick(1); handleChoosePC(0)}  }>Good</button>
                <button onClick={() => {handleButtonClick(1.25); handleChoosePC(1)}}>Better</button>
                <button onClick={() => {handleButtonClick(1.5); handleChoosePC(2)}}>Best</button>
                <button onClick={() => {handleButtonClick(2); handleChoosePC(3)}}>Ultimate</button>
            </div>

            <div className='start-build-specs-grid'>

                <div className='start-build-showcase'>
                    <div className='showing-the-pc'>
                        <img src={PC[choosePC].img} alt="" />
                    </div>
                    <div className='showing-the-pc-info'>
                        <div><p>Components Cost</p>
                            <h2>${totalPrice.toFixed(2)}</h2></div>
                        <div><p>Per Month As Low As</p>
                            <h2>${(totalPrice / 36).toFixed(2)}</h2>
                        </div>
                        <div><p>Check Our Customers Reviews</p>
                        <Link to='/review-page'><button  className='customer-bttn'>Reviews</button></Link>
                            </div>
                    </div>


                </div>


                <div className='start-build-specs'>

                    {
                        specs.map((spec, index) => {
                            const price = spec.price * priceMultiplier;
                            return (
                                <div key={index} className={`specs-info${index === 0 ? ' no-border-top' : ''}`}>
                                    <img src={spec.img} alt="" />
                                    <p>{spec.name}</p>
                                    <p><strong>${price.toFixed(2)}</strong></p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <SignUp />


            </div>
        </div>
        
    )

}

export default StartBuild;