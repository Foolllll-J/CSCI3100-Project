import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './shopping-cart.css'

const ShoppingCart = (props) => {
  return (
    <div className="shopping-cart-container">
      <Helmet>
        <title>Shopping-cart - MARTCUHK</title>
        <meta property="og:title" content="Shopping-cart - MARTCUHK" />
      </Helmet>
      <div className="shopping-cart-navbar">
        <header
          data-role="Header"
          className="shopping-cart-header max-width-container"
        >
          <div className="shopping-cart-navbar1">
            <div className="shopping-cart-container01">
              <Link to="/search" className="shopping-cart-navlink">
                <img
                  alt="search3271286"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                  className="shopping-cart-image"
                />
              </Link>
              <input
                type="text"
                placeholder="search"
                className="shopping-cart-textinput input"
              />
            </div>
            <div className="shopping-cart-middle">
              <div className="shopping-cart-left">
                <span className="navbar-link">SHOP</span>
                <span className="navbar-link">LOOKBOOK</span>
                <span className="navbar-link">SPECIAL</span>
              </div>
              <Link
                to="/"
                className="shopping-cart-logo-center navbar-logo-title"
              >
                MARTCUHK
              </Link>
              <div className="shopping-cart-right">
                <span className="navbar-link">ABOUT</span>
                <span className="navbar-link">BLOG</span>
                <span className="navbar-link">CONTACT</span>
              </div>
            </div>
            <div className="shopping-cart-icons">
              <Link to="/shopping-cart" className="shopping-cart-navlink1">
                <img
                  alt="iconsbxscart3271299"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                  className="shopping-cart-image1"
                />
              </Link>
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="shopping-cart-image2"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="shopping-cart-image3"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="shopping-cart-burger-menu">
            <svg viewBox="0 0 1024 1024" className="shopping-cart-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="shopping-cart-mobile-menu">
            <div className="shopping-cart-nav">
              <div className="shopping-cart-container02">
                <span className="shopping-cart-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="shopping-cart-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="shopping-cart-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="shopping-cart-middle1">
                <span className="shopping-cart-text06">SHOP</span>
                <span className="shopping-cart-text07">LOOKBOOK</span>
                <span className="shopping-cart-text08">SPECIAL</span>
                <span className="shopping-cart-text09">ABOUT</span>
                <span className="shopping-cart-text10">BLOG</span>
                <span className="shopping-cart-text11">CONTACT</span>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="shopping-cart-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="shopping-cart-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="shopping-cart-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="shopping-cart-main">
        <div className="shopping-cart-blog section-container"></div>
        <div className="shopping-cart-container03">
          <div className="shopping-cart-container04">
            <h1 className="shopping-cart-text12 Heading-2">CART</h1>
            <div className="shopping-cart-container05">
              <div className="shopping-cart-container06">
                <div className="shopping-cart-container07">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="shopping-cart-image4"
                  />
                </div>
              </div>
              <div className="shopping-cart-container08">
                <div className="shopping-cart-container09">
                  <span className="shopping-cart-text13">此处是商品id</span>
                  <span className="shopping-cart-text14">此处是商品名</span>
                  <div className="shopping-cart-container10">
                    <div className="shopping-cart-container11">
                      <span className="shopping-cart-text15">Price:    $ </span>
                    </div>
                    <span className="shopping-cart-text16">此处是商品价格</span>
                  </div>
                  <div className="shopping-cart-container12">
                    <span className="shopping-cart-text17">
                      Product Quantity:  
                    </span>
                    <select>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="shopping-cart-container13">
                  <button type="button" className="shopping-cart-button button">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shopping-cart-container14">
            <h1 className="shopping-cart-text18 Heading-2">SUMMARY</h1>
            <div className="shopping-cart-container15">
              <span className="Content">Subtotal:$ </span>
              <span className="shopping-cart-text20 Content">
                此处是商品价格
              </span>
            </div>
            <div className="shopping-cart-container16">
              <span className="Content">
                Estimated Delivery &amp; Handling                    Free
              </span>
            </div>
            <div className="shopping-cart-container17">
              <span className="Content">Total:$ </span>
              <span className="shopping-cart-text23 Content">
                此处是商品价格
              </span>
            </div>
            <div className="shopping-cart-container18">
              <Link to="/checkout" className="shopping-cart-navlink2 button">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shopping-cart-footer">
        <div className="max-width-container">
          <footer className="shopping-cart-footer1">
            <div className="shopping-cart-container19">
              <h3 className="shopping-cart-text24 Heading-3">MARTCUHK</h3>
              <span className="shopping-cart-text25">
                The Chinese University of Hong Kong, Ma Liu Shui, Shatin, Hong
                Kong
              </span>
              <span className="shopping-cart-text26">(852) 1234-5678</span>
              <span className="shopping-cart-text27">
                contact@cse.cuhk.edu.com
              </span>
            </div>
            <div className="shopping-cart-links-container">
              <div className="shopping-cart-container20">
                <span className="shopping-cart-text28">Categories</span>
                <span className="shopping-cart-text29">Collections</span>
                <span className="shopping-cart-text30">Desks</span>
                <span className="shopping-cart-text31">Furniture</span>
                <span className="shopping-cart-text32">Lamps</span>
                <span className="shopping-cart-text33">Plants</span>
                <span className="shopping-cart-text34">Decoration</span>
              </div>
              <div className="shopping-cart-container21">
                <span className="shopping-cart-text35">Company</span>
                <span className="shopping-cart-text36">Shop</span>
                <span className="shopping-cart-text37">Lookbook</span>
                <span className="shopping-cart-text38">Specials</span>
                <span className="shopping-cart-text39">About</span>
                <span className="shopping-cart-text40">Blog</span>
              </div>
              <div className="shopping-cart-container22">
                <span className="shopping-cart-text41">Resources</span>
                <span className="shopping-cart-text42">Contact us</span>
                <Link to="/past-orders" className="shopping-cart-navlink3">
                  Order
                </Link>
                <Link to="/track-order" className="shopping-cart-navlink4">
                  Track your order
                </Link>
                <span className="shopping-cart-text43">
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

export default ShoppingCart
