import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TestimonialCard3 from '../components/testimonial-card3'
import './review-and-rating.css'

const ReviewAndRating = (props) => {
  return (
    <div className="review-and-rating-container">
      <Helmet>
        <title>Review-and-Rating - MARTCUHK</title>
        <meta property="og:title" content="Review-and-Rating - MARTCUHK" />
      </Helmet>
      <div className="review-and-rating-navbar">
        <header
          data-role="Header"
          className="review-and-rating-header max-width-container"
        >
          <div className="review-and-rating-navbar1">
            <div className="review-and-rating-container01">
              <Link to="/search" className="review-and-rating-navlink">
                <img
                  alt="search3271286"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                  className="review-and-rating-image"
                />
              </Link>
              <input
                type="text"
                placeholder="search"
                className="review-and-rating-textinput input"
              />
            </div>
            <div className="review-and-rating-middle">
              <div className="review-and-rating-left">
                <span className="navbar-link">SHOP</span>
                <span className="navbar-link">LOOKBOOK</span>
                <span className="navbar-link">SPECIAL</span>
              </div>
              <Link
                to="/"
                className="review-and-rating-logo-center navbar-logo-title"
              >
                MARTCUHK
              </Link>
              <div className="review-and-rating-right">
                <span className="navbar-link">ABOUT</span>
                <span className="navbar-link">BLOG</span>
                <span className="navbar-link">CONTACT</span>
              </div>
            </div>
            <div className="review-and-rating-icons">
              <Link to="/shopping-cart" className="review-and-rating-navlink1">
                <img
                  alt="iconsbxscart3271299"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                  className="review-and-rating-image1"
                />
              </Link>
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="review-and-rating-image2"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="review-and-rating-image3"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="review-and-rating-burger-menu">
            <svg viewBox="0 0 1024 1024" className="review-and-rating-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="review-and-rating-mobile-menu">
            <div className="review-and-rating-nav">
              <div className="review-and-rating-container02">
                <span className="review-and-rating-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="review-and-rating-close-mobile-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="review-and-rating-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="review-and-rating-middle1">
                <span className="review-and-rating-text06">SHOP</span>
                <span className="review-and-rating-text07">LOOKBOOK</span>
                <span className="review-and-rating-text08">SPECIAL</span>
                <span className="review-and-rating-text09">ABOUT</span>
                <span className="review-and-rating-text10">BLOG</span>
                <span className="review-and-rating-text11">CONTACT</span>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="review-and-rating-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="review-and-rating-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="review-and-rating-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
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
              We value your feedback! Your insights not only help us improve,
              but also assist other customers in making informed decisions.
              Please leave a detailed review and rate your purchase to help us
              serve you better. Thank you for taking the time to provide your
              thoughts
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
        <div className="review-and-rating-container06">
          <div className="review-and-rating-testimonial">
            <h1 className="review-and-rating-text15">Customer Voices</h1>
            <span className="review-and-rating-text16">
              Read genuine reviews from our valued customers. Their feedback
              highlights the experiences and satisfaction of people just like
              you. Take a moment to see what they have to say about our products
              and services.
            </span>
            <div className="review-and-rating-container07">
              <TestimonialCard3
                name="Emily Rivera"
                quote="An outstanding experience! The product exceeded my expectations and the customer service was exceptional. Highly recommended for anyone looking for quality and reliability."
                pictureSrc="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard3>
              <TestimonialCard3
                name="Michael Thompson"
                quote="I was thoroughly impressed by the prompt delivery and the quality of the item I purchased. It's rare to find a company that truly delivers on its promises. I'll definitely be a return customer."
                pictureSrc="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard3>
              <TestimonialCard3
                name="Sophia Cheng"
                quote="From start to finish, my shopping experience was a pleasure. The product details were accurate, and the quality was exactly as described. I appreciate the care and attention to customer satisfaction."
                pictureSrc="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard3>
            </div>
          </div>
        </div>
      </div>
      <div className="review-and-rating-footer">
        <div className="max-width-container">
          <footer className="review-and-rating-footer1">
            <div className="review-and-rating-container08">
              <h3 className="review-and-rating-text17 Heading-3">MARTCUHK</h3>
              <span className="review-and-rating-text18">
                The Chinese University of Hong Kong, Ma Liu Shui, Shatin, Hong
                Kong
              </span>
              <span className="review-and-rating-text19">(852) 1234-5678</span>
              <span className="review-and-rating-text20">
                contact@cse.cuhk.edu.com
              </span>
            </div>
            <div className="review-and-rating-links-container">
              <div className="review-and-rating-container09">
                <span className="review-and-rating-text21">Categories</span>
                <span className="review-and-rating-text22">Collections</span>
                <span className="review-and-rating-text23">Desks</span>
                <span className="review-and-rating-text24">Furniture</span>
                <span className="review-and-rating-text25">Lamps</span>
                <span className="review-and-rating-text26">Plants</span>
                <span className="review-and-rating-text27">Decoration</span>
              </div>
              <div className="review-and-rating-container10">
                <span className="review-and-rating-text28">Company</span>
                <span className="review-and-rating-text29">Shop</span>
                <span className="review-and-rating-text30">Lookbook</span>
                <span className="review-and-rating-text31">Specials</span>
                <span className="review-and-rating-text32">About</span>
                <span className="review-and-rating-text33">Blog</span>
              </div>
              <div className="review-and-rating-container11">
                <span className="review-and-rating-text34">Resources</span>
                <span className="review-and-rating-text35">Contact us</span>
                <Link to="/past-orders" className="review-and-rating-navlink3">
                  Order
                </Link>
                <Link to="/track-order" className="review-and-rating-navlink4">
                  Track your order
                </Link>
                <span className="review-and-rating-text36">
                  Shipping &amp; Delivery
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default ReviewAndRating
