import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './start-build-page.css'

// Good

import i5 from '../../assets/specs-imgs/i5-cpu.png'
import ram16 from '../../assets/specs-imgs/16gb-ram.png'
import cooler from '../../assets/specs-imgs/cooler.png'
import pcCase1 from '../../assets/specs-imgs/pc-case.png'
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

// Better
import i7 from '../../assets/specs-imgs/i7-cpu.png'
import ram32 from '../../assets/specs-imgs/32gb-ram.png'
import cooler2 from '../../assets/specs-imgs/cooler2.png'
import motherboard2 from '../../assets/specs-imgs/motherboard2.png'
import watts800 from '../../assets/specs-imgs/800watts.png'
import rtx4070 from '../../assets/specs-imgs/rtx4070.png'
import pcCase2 from '../../assets/specs-imgs/pc-case2.png'

// Best
import cooler3 from '../../assets/specs-imgs/cooler3.png'
import motherboard3 from '../../assets/specs-imgs/motherboard3.png'
import pcCase3 from '../../assets/specs-imgs/pc-case3.png'
import watts850 from '../../assets/specs-imgs/850watts.png'
import rtx4080 from '../../assets/specs-imgs/rtx4080.png'
import fans2 from '../../assets/specs-imgs/fans2.png'

// Ultimate
import cooler4 from '../../assets/specs-imgs/cooler4.png'
import i9 from '../../assets/specs-imgs/i9-cpu.png'
import watts900 from '../../assets/specs-imgs/900watts.png'
import fans3 from '../../assets/specs-imgs/fans3.png'
import ram64 from '../../assets/specs-imgs/64gb-ram.png'
import pcCase4 from '../../assets/specs-imgs/pc-case4.png'
import rtx4090 from '../../assets/specs-imgs/rtx4090.png'



const StartBuild = () => {

    const specsGood = [
        
       
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
            name: 'DARK CASTLE 5700g',
            img: pcCase1,
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
            name: 'CM MASTERFANS RGB',
            img: fans,
            price: 49.99, // Adjusted price
        },
    ];

    const specsBetter = [
        
       
        {
            name: 'INTEL CORE i7 10th GEN',
            img: i7,
            price: 250.99, 
            
        },
        {
            name: '32GB DDR',
            img: ram32,
            price: 79.99, 
        },
        {
            name: 'NZXT KRAKEN X63 LIQUID COOLER',
            img: cooler2,
            price: 39.99, 
        },
        {
            name: 'Periphio Terra',
            img: pcCase2,
            price: 99.99, 
        },
        {
            name: 'ASUS ROG Strix Z490-E',
            img: motherboard2,
            price: 119.99, 
        },
        {
            name: 'NVIDIA RTX 4070',
            img: rtx4070,
            price: 599.99, 
        },
        {
            name: 'WINDOWS 10 Pro',
            img: windows10,
            price: 109.99, 
        },
        {
            name: '800W ATX 80 PLUS GOLD',
            img: watts800,
            price: 179.99, 
        },
        {
            name: '1.5 TB SSD',
            img: tb1,
            price: 119.99, // Adjusted price
        },
        {
            name: 'CM MASTERFANS RGB',
            img: fans,
            price: 39.99, // Adjusted price
        },
    ];

    const specsBest = [
        
       
        {
            name: 'INTEL CORE i7 13th GEN',
            img: i7,
            price: 250.99, 
            
        },
        {
            name: '32GB DDR',
            img: ram32,
            price: 66.66, 
        },
        {
            name: 'EVGA CLC 280',
            img: cooler3,
            price: 39.99, 
        },
        {
            name: 'MESHIFY C',
            img: pcCase3,
            price: 99.99, 
        },
        {
            name: 'ASRock Z490 Taichi',
            img: motherboard3,
            price: 119.99, 
        },
        {
            name: 'NVIDIA RTX 4080',
            img: rtx4080,
            price: 599.99, 
        },
        {
            name: 'WINDOWS 11',
            img: windows10,
            price: 109.99, 
        },
        {
            name: 'ROG-STRIX-850W',
            img: watts850,
            price: 179.99, 
        },
        {
            name: '2TB SSD',
            img: tb1,
            price: 119.99, // Adjusted price
        },
        {
            name: 'Halo A-RGB PWM Fans',
            img: fans2,
            price: 49.99, // Adjusted price
        },
    ];

    const specsUltimate = [
        
       
        {
            name: 'INTEL CORE i9 13th GEN',
            img: i9,
            price: 250.99, 
            
        },
        {
            name: '64GB DDR',
            img: ram64,
            price: 79.99, 
        },
        {
            name: 'DARKROCK PX4',
            img: cooler4,
            price: 39.99, 
        },
        {
            name: 'Y60 BLACK',
            img: pcCase4,
            price: 99.99, 
        },
        {
            name: 'MSI MEG Z490 ACEP',
            img: motherboard,
            price: 119.99, 
        },
        {
            name: 'NVIDIA RTX 4090',
            img: rtx4090,
            price: 599.99, 
        },
        {
            name: 'WINDOWS 11 PRO',
            img: windows10,
            price: 109.99, 
        },
        {
            name: 'Apevia ATX-SN 900W',
            img: watts900,
            price: 179.99, 
        },
        {
            name: '3TB SSD',
            img: tb1,
            price: 119.99, // Adjusted price
        },
        {
            name: 'SILENT WINGS 4',
            img: fans3,
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
    const [specList, setSpecList] = useState(specsGood);

    const toggleSpecs = () => {
        if (priceMultiplier === 1) {
            setSpecList(specsGood);
        } else if (priceMultiplier === 1.25) {
            setSpecList(specsBetter);
        }
        else if (priceMultiplier === 1.5) {
            setSpecList(specsBest);
        }
        else if (priceMultiplier === 2) {
            setSpecList(specsUltimate);
        }
    }


    const calculateTotalPrice = () => {
        let total = 0;
        specsGood.forEach(spec => {
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

    useEffect(() => {
        toggleSpecs();
    }, [specList]);


   

 






    return (
        <div className='start-max-container'>
        <div className='start-build-page'>

            <div className='start-build-grid'>
                <h1 className='start-build-h1'>Your Optimized Build.</h1>
                <div className='start-bttn-container'>
                    <Link to='/contact-page'><button className='start-build-bttn-contact'>Save & Email</button></Link>
                    <Link to='/cart-page'><button className='start-build-bttn-checkout'>Checkout</button></Link>
                </div>
            </div>
            <div className='start-build-type-grid'>
                <button onClick={() => {handleButtonClick(1); handleChoosePC(0); toggleSpecs()}  }>Good</button>
                <button onClick={() => {handleButtonClick(1.25); handleChoosePC(1); toggleSpecs()}}>Better</button>
                <button onClick={() => {handleButtonClick(1.5); handleChoosePC(2); toggleSpecs()}}>Best</button>
                <button onClick={() => {handleButtonClick(2); handleChoosePC(3); toggleSpecs()}}>Ultimate</button>
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
                        specList.map((spec, index) => {
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