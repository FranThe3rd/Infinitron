import React from 'react'
import './best-sellers.css'
import pc_logo from '../../assets/pc-specs-logo/logo1.png'

const ProgressBar = ({ label, width }) => {
    let progressBarColor;

    // Set progress bar color based on the label
    switch (label) {
        case 'GPU':
            progressBarColor = 'green';
            break;
        case 'CPU':
            progressBarColor = 'red';
            break;
        case 'RAM':
            progressBarColor = 'blue';
            break;
        case 'HDD':
            progressBarColor = 'purple';
            break;
        default:
            progressBarColor = 'gray';
            break;
    }

    return (
        <>
            <h3 className='progress-text'>{label}</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${width}%`, backgroundColor: progressBarColor }}></div>
            </div>
        </>
    );
};

const BestSellers = () => {
    const BestData = [
        {
            title: 'GOOD',
            graphics: 'RTX 4060',
            caption: 'Level up your gaming experience without breaking the bank!',
            logo: pc_logo,
            gpu: 60,
            cpu: 70,
            ram: 80,
            hdd: 50
        },
        {
            title: 'BETTER',
            graphics: 'RTX 4070 Super',
            caption: 'Perfect gaming PC for high settings, max resolutions, and streaming.',
            logo: pc_logo,
            gpu: 70,
            cpu: 80,
            ram: 90,
            hdd: 60
        },
        {
            title: 'BEST',
            graphics: 'RTX 4080 Super',
            caption: 'Maximum performance. Experience high frame rates at ultra settings.',
            logo: pc_logo,
            gpu: 80,
            cpu: 90,
            ram: 100,
            hdd: 70
        },
        {
            title: 'ULTIMATE',
            graphics: 'RTX 4090',
            caption: 'Delivers the ultimate experience for gamers and content creators.',
            logo: pc_logo,
            gpu: 90,
            cpu: 100,
            ram: 110,
            hdd: 80
        }
    ];


    return (
        <div className='best-sellers'>
            <h1 className='best-h1'>Best Sellers</h1>
            <div className='best-container'>
                {BestData.map((best, index) => {
                    return (
                        <div className='best-sellers-card' key={index}>
                            <img src={best.logo} alt='pc-logo' className='best-logo' />
                            <h2 className='best-h2'>{best.title}</h2>
                            <h3 className='best-h3'>{best.graphics}</h3>
                            <p className='best-p'>{best.caption}</p>

                            <ProgressBar label="GPU" width={best.gpu} />
                            <ProgressBar label="CPU" width={best.cpu} />
                            <ProgressBar label="RAM" width={best.ram} />
                            <ProgressBar label="HDD" width={best.hdd} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BestSellers;
