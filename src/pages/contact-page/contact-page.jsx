import React from 'react'
import './contact-page.css'

export const ContactPage = () => {
return (
    <div className='contact-page'>
        <div className='contact-form'>
            <h1>Get in Touch</h1>
            <h2>Dedicated contact options for general inquiries, support, and partnerships.</h2>
            
            <input  type="text"  placeholder="Email Address" />
            <textarea id="message" name="message" rows="8" placeholder="What can we help you with?"/>
            <button>Send</button>

        </div>
    </div>
)
}
