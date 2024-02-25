import './follow.css'
import { InstagramLogo } from 'phosphor-react';
import { FacebookLogo } from 'phosphor-react';
import { TwitterLogo } from 'phosphor-react';
import { YoutubeLogo } from 'phosphor-react';
import pc1 from '../../assets/follow-pc/pc1.png'
import pc2 from '../../assets/follow-pc/pc2.png'
import pc3 from '../../assets/follow-pc/pc3.png'
import pc4 from '../../assets/follow-pc/pc4.png'
import pc5 from '../../assets/follow-pc/pc5.png'
import pc6 from '../../assets/follow-pc/pc6.png'
import pc7 from '../../assets/follow-pc/pc7.png'
import pc8 from '../../assets/follow-pc/pc8.png'
import pc9 from '../../assets/follow-pc/pc9.png'
import pc10 from '../../assets/follow-pc/pc10.png'
import pc11 from '../../assets/follow-pc/pc11.png'
import pc12 from '../../assets/follow-pc/pc12.png'


export const Follow = () => {
    return (
        <div className="follow-container">
            <h1 className='follow-h1'>FOLLOW THE JOURNEY <span className="purple-text">@INFINITRON</span></h1>
            <div className='follow-icons'>
                <InstagramLogo size={48}  color="#8E2DE2" />
                <FacebookLogo size={48} color="#8E2DE2" />
                <TwitterLogo size={48} color="#8E2DE2" />
                <YoutubeLogo size={48} color="#8E2DE2" />
            </div>
            <div className='follow-grid'>
                <img src={pc1} alt="pc1" className="follow-pc"/>
                <img src={pc2} alt="pc2" className="follow-pc"/>
                <img src={pc3} alt="pc3" className="follow-pc"/>
                <img src={pc4} alt="pc4" className="follow-pc"/>
                <img src={pc5} alt="pc5" className="follow-pc"/>
                <img src={pc6} alt="pc6" className="follow-pc"/>
                <img src={pc7} alt="pc7" className="follow-pc"/>
                <img src={pc8} alt="pc8" className="follow-pc"/>
                <img src={pc12} alt="pc8" className="follow-pc"/>
                <img src={pc9} alt="pc6" className="follow-pc"/>
                <img src={pc10} alt="pc7" className="follow-pc"/>
                <img src={pc11} alt="pc8" className="follow-pc"/>



            </div>


        </div>
    )
}

export default Follow;