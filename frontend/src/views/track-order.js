import React from 'react'
import { Link } from 'react-router-dom'

import './track-order.css'

const TrackOrder = (props) => {
  return (
    <div className="track-order-container">
      <div className="track-order-main">
        <div className="track-order-speakers section-container1">
          <div className="track-order-max-width max-content-container">
            <div className="track-order-heading-container">
              <h1 className="track-order-text12 Heading-1">Track order</h1>
            </div>
            <div className="track-order-speakers-container"></div>
            <span className="track-order-text13">
              Stay updated with the progress of your order every step of the
              way.<br />Simply enter your order number and email address below to
              view the latest status.<br />Whether your order is being processed,
              shipped, or is out for delivery, you can track it in real-time.<br />If
              you encounter any issues or have questions regarding your
              order&apos;s location, our customer service team is here to assist
              you.
            </span>
          </div>
        </div>
        <div className="track-order-container3">
          <div className="track-order-content">
            <div className="track-order-details">
              <div className="track-order-header1">
                <h2 className="track-order-heading">Order Location</h2>
                <p className="track-order-caption">
                  Keep a close eye on your order&apos;s journey to your doorstep
                  with our easy-to-use tracking system. Simply enter your order
                  number and get up-to-the-minute location updates, so you know
                  exactly when to expect delivery. Stay informed every step of
                  the way—from dispatch to delivery
                </p>
              </div>
            </div>
            <div className="track-order-slider">
              <div className="track-order-slides">
                <div className="slide slide-active">
                  <img
                    alt="image"
                    src="/external/slide-1-1400w-1200w.png"
                    className="track-order-image4"
                  />
                  <span className="track-order-text14">
                    这里两个箭头滚动可以让订单状态变化
                  </span>
                </div>
                <div className="slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1200"
                    className="track-order-image5"
                  />
                  <span className="track-order-text15">
                    <span>This is a test slide</span>
                    <br></br>
                  </span>
                </div>
                <div className="slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1200"
                    className="track-order-image6"
                  />
                  <span className="track-order-text18">
                    <span>This one also!</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="track-order-buttons-container">
                <div className="track-order-buttons">
                  <button
                    id="previous-slide"
                    className="track-order-previous button"
                  >
                    <svg viewBox="0 0 1024 1024" className="track-order-icon10">
                      <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                    </svg>
                  </button>
                  <button id="next-slide" className="track-order-next button">
                    <svg viewBox="0 0 1024 1024" className="track-order-icon12">
                      <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder
