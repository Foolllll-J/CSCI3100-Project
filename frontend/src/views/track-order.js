import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './track-order.css'

const TrackOrder = (props) => {
  return (
    <div className="track-order-container">
      <Helmet>
        <title>Track-order - MARTCUHK</title>
        <meta property="og:title" content="Track-order - MARTCUHK" />
      </Helmet>
      <div className="track-order-navbar">
        <header
          data-role="Header"
          className="track-order-header max-width-container"
        >
          <div className="track-order-navbar1">
            <div className="track-order-container1">
              <Link to="/search" className="track-order-navlink">
                <img
                  alt="search3271286"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                  className="track-order-image"
                />
              </Link>
              <input
                type="text"
                placeholder="search"
                className="track-order-textinput input"
              />
            </div>
            <div className="track-order-middle">
              <div className="track-order-left">
                <span className="navbar-link">SHOP</span>
                <span className="navbar-link">LOOKBOOK</span>
                <span className="navbar-link">SPECIAL</span>
              </div>
              <Link
                to="/"
                className="track-order-logo-center navbar-logo-title"
              >
                MARTCUHK
              </Link>
              <div className="track-order-right">
                <span className="navbar-link">ABOUT</span>
                <span className="navbar-link">BLOG</span>
                <span className="navbar-link">CONTACT</span>
              </div>
            </div>
            <div className="track-order-icons">
              <Link to="/shopping-cart" className="track-order-navlink1">
                <img
                  alt="iconsbxscart3271299"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                  className="track-order-image1"
                />
              </Link>
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="track-order-image2"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="track-order-image3"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="track-order-burger-menu">
            <svg viewBox="0 0 1024 1024" className="track-order-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="track-order-mobile-menu">
            <div className="track-order-nav">
              <div className="track-order-container2">
                <span className="track-order-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="track-order-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="track-order-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="track-order-middle1">
                <span className="track-order-text06">SHOP</span>
                <span className="track-order-text07">LOOKBOOK</span>
                <span className="track-order-text08">SPECIAL</span>
                <span className="track-order-text09">ABOUT</span>
                <span className="track-order-text10">BLOG</span>
                <span className="track-order-text11">CONTACT</span>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="track-order-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="track-order-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="track-order-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="track-order-main">
        <div className="track-order-speakers section-container1">
          <div className="track-order-max-width max-content-container">
            <div className="track-order-heading-container">
              <h1 className="track-order-text12 Heading-1">Track order</h1>
            </div>
            <div className="track-order-speakers-container"></div>
            <span className="track-order-text13">
              Stay updated with the progress of your order every step of the
              way. Simply enter your order number and email address below to
              view the latest status. Whether your order is being processed,
              shipped, or is out for delivery, you can track it in real-time. If
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
        <div className="track-order-container4">
          <section className="track-order-faq">
            <div id="faqs" className="track-order-content1">
              <div className="track-order-heading1">
                <h2 className="track-order-header2">
                  Frequently asked questions
                </h2>
                <p className="track-order-caption1">
                  Have questions about tracking your order? We&apos;ve compiled
                  a list of the most common inquiries to help you get quick
                  answers regarding shipment tracking, delivery times, and much
                  more. Browse through our FAQs to find detailed information and
                  resolve your queries promptly. If you need further assistance,
                  our customer support team is just a click away.
                </p>
              </div>
              <div className="track-order-accordion">
                <div
                  data-role="accordion-container"
                  className="accordion track-order-element"
                >
                  <div className="track-order-content2">
                    <span className="track-order-header3">
                      What if I lost my order number?
                    </span>
                    <span
                      data-role="accordion-content"
                      className="track-order-description"
                    >
                      If you&apos;ve lost your order number, please check your
                      email for the order confirmation or contact our support
                      team for assistance.
                    </span>
                  </div>
                  <div className="track-order-icon-container">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="track-order-icon14"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="track-order-icon16"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="track-order-element1 accordion"
                >
                  <div className="track-order-content3">
                    <span className="track-order-header4">
                      How long does it typically take to process an order before
                      shipping?
                    </span>
                    <span
                      data-role="accordion-content"
                      className="track-order-description1"
                    >
                      Order processing times can vary, but we typically dispatch
                      orders within 1-2 business days.
                    </span>
                  </div>
                  <div className="track-order-icon-container1">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="track-order-icon18"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="track-order-icon20"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="track-order-element2 accordion"
                >
                  <div className="track-order-content4">
                    <span className="track-order-header5">
                      Can I change my delivery address after placing an order?
                    </span>
                    <span
                      data-role="accordion-content"
                      className="track-order-description2"
                    >
                      Please contact customer service as soon as possible to
                      request an address change. Address changes may not be
                      feasible once an order is dispatched.
                    </span>
                  </div>
                  <div className="track-order-icon-container2">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="track-order-icon22"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="track-order-icon24"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="track-order-element3 accordion"
                >
                  <div className="track-order-content5">
                    <span className="track-order-header6">
                      What shipping carriers do you use?
                    </span>
                    <span
                      data-role="accordion-content"
                      className="track-order-description3"
                    >
                      We use a variety of shipping carriers, which may include
                      UPS, FedEx, and USPS, depending on the destination.
                    </span>
                  </div>
                  <div className="track-order-icon-container3">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="track-order-icon26"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="track-order-icon28"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-role="accordion-container"
                  className="track-order-element4 accordion"
                >
                  <div className="track-order-content6">
                    <span className="track-order-header7">
                      My tracking shows no movement, is my order lost?
                    </span>
                    <span
                      data-role="accordion-content"
                      className="track-order-description4"
                    >
                      If your tracking hasn&apos;t updated in several days,
                      please reach out to our customer support for assistance.
                    </span>
                  </div>
                  <div className="track-order-icon-container4">
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-closed"
                      className="track-order-icon30"
                    >
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-role="accordion-icon-open"
                      className="track-order-icon32"
                    >
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="track-order-footer">
        <div className="max-width-container">
          <footer className="track-order-footer1">
            <div className="track-order-container5">
              <h3 className="track-order-text21 Heading-3">MARTCUHK</h3>
              <span className="track-order-text22">
                The Chinese University of Hong Kong, Ma Liu Shui, Shatin, Hong
                Kong
              </span>
              <span className="track-order-text23">(852) 1234-5678</span>
              <span className="track-order-text24">
                contact@cse.cuhk.edu.com
              </span>
            </div>
            <div className="track-order-links-container">
              <div className="track-order-container6">
                <span className="track-order-text25">Categories</span>
                <span className="track-order-text26">Collections</span>
                <span className="track-order-text27">Desks</span>
                <span className="track-order-text28">Furniture</span>
                <span className="track-order-text29">Lamps</span>
                <span className="track-order-text30">Plants</span>
                <span className="track-order-text31">Decoration</span>
              </div>
              <div className="track-order-container7">
                <span className="track-order-text32">Company</span>
                <span className="track-order-text33">Shop</span>
                <span className="track-order-text34">Lookbook</span>
                <span className="track-order-text35">Specials</span>
                <span className="track-order-text36">About</span>
                <span className="track-order-text37">Blog</span>
              </div>
              <div className="track-order-container8">
                <span className="track-order-text38">Resources</span>
                <span className="track-order-text39">Contact us</span>
                <Link to="/past-orders" className="track-order-navlink2">
                  Order
                </Link>
                <Link to="/track-order" className="track-order-navlink3">
                  Track your order
                </Link>
                <span className="track-order-text40">
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

export default TrackOrder
