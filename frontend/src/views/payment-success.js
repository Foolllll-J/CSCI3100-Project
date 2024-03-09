import React from 'react'
import { Link } from 'react-router-dom'

import './payment-success.css'

const PaymentSuccess = (props) => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-main">
        <div className="payment-success-speakers section-container1">
          <div className="payment-success-max-width max-content-container">
            <div className="payment-success-heading-container">
              <h1 className="payment-success-text12 Heading-1">
                Payment Successful
              </h1>
            </div>
            <div className="payment-success-speakers-container"></div>
            <span className="payment-success-text13">
              Thank you for your payment!<br />Your transaction has been successfully
              processed.<br />A confirmation receipt has been sent to your email.<br />You
              can now continue to browse or return to the homepage.<br />If you have
              any questions, please contact customer service.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
