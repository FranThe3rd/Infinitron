import './review-page.css'
import SignUp from '../../components/sign-up/sign-up'

import reviewerOne from '../../assets/review-page-imgs/1.png'
import reviewerTwo from '../../assets/review-page-imgs/2.png'
import reviewerThree from '../../assets/review-page-imgs/3.png'
import reviewerFour from '../../assets/review-page-imgs/4.png'
import reviewerFive from '../../assets/review-page-imgs/5.png'
import reviewerSix from '../../assets/review-page-imgs/6.png'
import reviewerSeven from '../../assets/review-page-imgs/7.png'
import reviewerEight from '../../assets/review-page-imgs/8.png'
import reviewerNine from '../../assets/review-page-imgs/9.png'


export const ReviewPage = () => {

    const ReviewersData = [
        {
            name: 'Marques Enriquez',
            stars: '★★★★★',
            pic: reviewerOne,
            thoughts: "Just received my PC, all within 3 days of ordering. Superb packaging, and the assembly was nice and simple. I got the RTX 4080, and the performance is unlike anything I’ve seen or tried before.",
            date: '2/14/24'
        },
        {
            name: 'John Smith',
            stars: '★★★★★',
            pic: reviewerTwo,
            thoughts: "Choosing Infinitron's BETTER build featuring the RTX 4070 Super was a game-changer for me; smooth gameplay, stunning visuals, and seamless streaming all in one package.",
            date: '2/11/24'
        },
        {
            name: 'David Johnson',
            stars: '★★★★★',
            pic: reviewerThree,
            thoughts: "Infinitron's BEST configuration with the RTX 4080 Super blew me away with its unmatched performance, allowing me to enjoy gaming at ultra settings without a hitch.",
            date: '2/04/24'
        },
        {
            name: 'Hunter Finnegan',
            stars: '★★★★★',
            pic: reviewerFour,
            thoughts: "I'm a huge fan of Infinitron's GOOD option with the RTX 4060; it's a great value for the price and runs all my favorite games smoothly.",
            date: '1/29/24'
            
        },
        {
            name: 'Michael Wilson',
            stars: '★★★★',
            pic: reviewerFive,
            thoughts: "The ULTIMATE gaming experience is within reach with Infinitron's RTX 4090; it's a beast of a machine that handles any game at maximum settings with ease.",
            date: '1/25/24'
        },
        {
            name: 'Eric Chen',
            stars: '★★★★',
            pic: reviewerSix,
            thoughts: "I'm extremely satisfied with Infinitron's BETTER build featuring the RTX 4070 Super; it's a great balance of performance and value.",
            date: '1/20/24'
        },
        {
            name: 'Jessica Anderson',
            stars: '★★★★',
            pic: reviewerSeven,
            thoughts: "Infinitron's BEST configuration with the RTX 4080 Super is a game-changer; it's a powerhouse that delivers an incredible gaming experience.",
            date: '1/15/24'
        },
        {
            name: 'Mark Wahlberg',
            stars: '★★★★',
            pic: reviewerEight, 
            thoughts: "I'm a huge fan of Infinitron's GOOD option with the RTX 4060; it's a great value for the price and runs all my favorite games smoothly.",
            date: '1/10/24'
        },
        {
            name: 'William Brown',
            stars: '★★★★',
            pic: reviewerNine,
            thoughts: "The ULTIMATE gaming experience is within reach with Infinitron's RTX 4090; it's a beast of a machine that handles any game at maximum settings with ease.",
            date: '1/05/24'
        }
    ];
    
    

    return (
        <div className="review-page">

            <h1 className='review-page-h1'>Words From Our Customers</h1>
            <div className="review-page-container">
                {ReviewersData.map((review, index) => (
                    <div className="review-page-card" key={index}>
                        <div className="review-page-card-header">
                            <img src={review.pic} alt="Avatar" />
                            <h4>{review.name}</h4>
                            <h3 className='review-page-stars'>{review.stars}</h3>
                        </div>
                        <p className='review-page-date'>{review.date}</p>
                        <div className="review-page-card-body">
                            <p className='review-page-thoughts'>"{review.thoughts}"</p>
                        </div>
                    </div>
                ))}

            </div>
            <SignUp />
        </div>
    )
}

export default ReviewPage