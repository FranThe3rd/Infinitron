import React from 'react';
import './review-cards.css';
import FirstReview from '../../assets/review-cards-imgs/first-review.png'
import SecondReview from '../../assets/review-cards-imgs/second-review.png'
import ThirdReview from '../../assets/review-cards-imgs/third-review.png'
import FourthReview from '../../assets/review-cards-imgs/fourth-review.png'

import first_person from '../../assets/tech-people/1.png'
import second_person from '../../assets/tech-people/2.png'
import third_person from '../../assets/tech-people/3.png'
import fourth_person from '../../assets/tech-people/4.png'


export const ReviewCards = () => {

    const reviewData = [

        {
            Image: FirstReview,
            Text: "I recently purchased a PC from this company, and I must say, it's exceeded my expectations. The speed and efficiency of this machine are remarkable. ",
            Reviewer: 'SphereX',
            Person: first_person
        },
        {
            Image: SecondReview,
            Text: "I recently got my hands on a PC from Infinitron, and I'm thoroughly impressed. The design and its powerful performance makes it a winner in my book.",
            Reviewer: 'MetaMatrix',
            Person: second_person

        },
        {
            Image: ThirdReview,
            Text: "I invested in a PC from this place, and I couldn't be happier with my decision. The build quality is exceptional, and it handles all my tasks with ease. ",
            Reviewer: 'LogicForge',
            Person: third_person

        },
        {
            Image: FourthReview,
            Text: " Wow I really liked this PC, and it has completely blown me away. The speed and reliability of this machine are unmatched. ",
            Reviewer: 'DataSynth',
            Person: fourth_person

        }

    ]

    return (
        <div className='review-cards'>
            <h1 className='review-title'>WE BUILD FOR THE BEST</h1>
            <div className='review-grid'>
            {
                reviewData.map((review, index) => {
                    return (
                        <div className='review-card' key={index}>
                            <img className='review-img' src={review.Image} alt="" />
                            <div className='review-text-div'>
                            <p className='review-p'>"{review.Text}"</p>
                            </div>
                            <div className='review-people-div'>
                            <img className='reviewer' src={review.Person} alt="" />
                            <h2 className='review-h2'>{review.Reviewer}</h2>
                            </div>

                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ReviewCards;