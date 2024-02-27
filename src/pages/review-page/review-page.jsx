import './review-page.css'
import SignUp from '../../components/sign-up/sign-up'
export const ReviewPage = () => {
    return (
        <div className="review-page">

            <h1 className='review-page-h1'>Words From Our Customers</h1>
            <div className="review-page-container">
                {[...Array(9)].map((_, index) => (
                    <div className="review-page-card" key={index}>
                        <div className="review-page-card-header">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                            <h4>John Doe</h4>
                            <h3 className='review-page-stars'>★★★★★</h3>
                        </div>
                        <div className="review-page-card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex deleniti odit ad unde magni repellat voluptate, quis odio, provident quo consequatur. Exercitationem quae, tenetur quo mollitia quisquam similique quis.</p>
                        </div>
                    </div>
                ))}
            </div>
            <SignUp />
        </div>
    )
}

export default ReviewPage