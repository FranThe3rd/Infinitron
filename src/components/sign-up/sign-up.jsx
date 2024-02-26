import './sign-up.css';
import { InstagramLogo, FacebookLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

export const SignUp = () => {
    return (
        <div className="sign-up">
            <div className='sign-div'>
                <h2 className='sign-h2'>Sign up to our newsletter for the latest PC news.</h2>
                <input type="text" placeholder="Enter your email" className="sign-input" />
                <button className="sign-button">Sign Up</button>
            </div>
            <div className='sign-social-div'>
                <div className='sign-social-icons'>
                    <InstagramLogo size={32} color="#fff"  />
                    <FacebookLogo size={32} color="#fff" />
                    <TwitterLogo size={32} color="#fff" />
                    <YoutubeLogo size={32} color="#fff" />
                </div>
                </div>
            

        </div>
    )
}





export default SignUp;