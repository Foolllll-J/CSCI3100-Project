import React from 'react'
import { Link } from 'react-router-dom'

import './review-and-rating.css'

const ReviewAndRating = (props) => {
  return (
    <div className="review-and-rating-container">
      <div className="review-and-rating-main">
        <div className="review-and-rating-speakers section-container1">
          <div className="review-and-rating-max-width max-content-container">
            <div className="review-and-rating-heading-container">
              <h1 className="review-and-rating-text12 Heading-2">
                Product Review and Rating
              </h1>
            </div>
            <div className="review-and-rating-speakers-container"></div>
            <span className="review-and-rating-text13">
              We value your feedback!<br />Your insights not only help us improve,
              but also assist other customers in making informed decisions.<br />
              Please leave a detailed review and rate your purchase to help us
              serve you better.<br />Thank you for taking the time to provide your
              thoughts.
            </span>
          </div>
        </div>
        <div className="review-and-rating-container03">
          <div className="review-and-rating-container04">
            <span className="review-and-rating-text14">
              此处是要评价的商品，具体内容为打分和写评论
            </span>
          </div>
          <div className="review-and-rating-container05">
            <Link
              to="/past-orders"
              className="review-and-rating-navlink2 button"
            >
              Submit Review
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewAndRating
