import React from 'react'
import './finance-page.css'
import financeMain from '../../assets/finance-page-imgs/finance-main2.png'
import financeOne from '../../assets/finance-page-imgs/1.png'
import financeTwo from '../../assets/finance-page-imgs/2.png'
import SignUp from '../../components/sign-up/sign-up'



const FinancePage = () => {
  return (
    <div className='finance-page'>
      <img className='finance-page-img' src={financeMain} alt="" />
      <h1 className='finance-page-h1'>
        Buy Now, Pay Later
      </h1>
      <p className='finance-page-p'>
        EASY AND AFFORDABLE FINANCING WITH CLEAR AND TRANSPARENT TERMS.
      </p>
      <button className='finance-page-button'>GET STARTED</button>
      <div className='finance-page-info'>
        <div className='finance-page-grid'>
          <img className='finance-page-one' src={financeOne} alt="" />

          <div className='finance-page-text-container-one'>
            <h1 className='finance-page-info-h1-one'>
              0% APR Available for 6-Month Financing*
            </h1>
            <h2>Infinitron provides easy and affordable financing, powered by Bread Pay™, so you can pay for your purchase over time.</h2>
          </div>

          <div className='finance-page-text-container-two'>
            <h1 className='finance-page-info-h1-two'>
              Easy and Affordable Financing
            </h1>
            <p style={{ fontWeight: 'bold' }}>Affordable Monthly Plans</p>
            <p>Buy now and pay for your purchase over time at competitive interest rates.</p>
            <p style={{ fontWeight: 'bold' }}>Quick and Easy Application</p>
            <p>Get a decision in seconds with no obligation to buy. Checking your rate won’t affect your credit score.</p>
            <p style={{ fontWeight: 'bold' }}>No Payment Penalties</p>
            <p>Pay for your purchase with monthly payments and prepay at anytime without a penalty.</p>
          </div>
          <img className='finance-page-two' src={financeTwo} alt="" />
        </div>


        <div className='finance-page-third'>
          <h2 className='finance-page-h2-two'>
            CHECK YOUR RATE IN SECONDS WITHOUT LEAVING OUR SITE
          </h2>
        </div>
        <button className='finance-page-button-two'>GET STARTED</button>
        <h2 className='finance-page-h2-three'>
          QUESTIONS? HELP?
        </h2>
        <p className='finance-page-p-two'>
          Check Bread®'s FAQ or reach Bread® directly at support@getbread.com or call 844-992-7323.

          *Subject to approval of credit application. Rates range from 0 to 29.99% APR, resulting in, for example, 36 monthly payments of $32.26 at 9.99% APR, per $1,000 borrowed. APRs will vary depending on credit qualifications, loan amount, and term. Bread Pay™ loans are made by Comenity Capital Bank, a Bread Financial™ company.

        </p>
        <SignUp />




      </div>
    </div>
  )
}

export default FinancePage
