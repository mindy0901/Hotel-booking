import React from 'react'

const MailList = () => {
      return (
            <div className="mail">
                  <h1 className="mail__title">Save time, save money!</h1>
                  <span className="mail__desc">Sign up and we'll send the best deals to you</span>
                  <div className="mail__inputContainer">
                        <input type="text" placeholder="Your Email" />
                        <button>Subscribe</button>
                  </div>
            </div>
      )
}

export default MailList