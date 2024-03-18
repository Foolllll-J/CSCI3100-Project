import React from 'react'
import { Link } from 'react-router-dom'

import './past-orders.css'

const PastOrders = (props) => {
  return (
    <div className="past-orders-container">
      <div className="past-orders-main">
        <div className="past-orders-speakers section-container1">
          <div className="past-orders-max-width max-content-container">
            <div className="past-orders-heading-container">
              <h1 className="past-orders-text12 Heading-1">Past Orders</h1>
            </div>
            <div className="past-orders-speakers-container"></div>
            <span className="past-orders-text13">
              View your past orders to easily repurchase items or check previous
              transactions.<br />This history helps you track and manage your
              purchases over time.<br />If you need detailed information about any
              order or if you&apos;re looking to reorder a past item, you can
              find it all here.
            </span>
          </div>
        </div>
        <div className="past-orders-container04">
          <div className="past-orders-container05">
            <span className="past-orders-text15">过往订单1</span>
          </div>
          <div className="past-orders-container06">
            <div className="past-orders-container07">
              <Link
                to="/review-and-rating"
                className="past-orders-navlink2 button"
              >
                Write the Review
              </Link>
            </div>
            <div className="past-orders-container08">
              <Link to="/track-order" className="past-orders-navlink3 button">
                Track the order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastOrders
