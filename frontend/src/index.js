import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ProductInfo from './views/product-info'
import Checkout from './views/checkout'
import PastOrders from './views/past-orders'
import Search from './views/search'
import TrackOrder from './views/track-order'
import PaymentSystem from './views/payment-system'
import PaymentSuccess from './views/payment-success'
import ShoppingCart from './views/shopping-cart'
import ReviewAndRating from './views/review-and-rating'
import Home from './views/home'
import NotFound from './views/not-found'
import Login from './views/login'
import Signup from './views/signup'

const App = () => {
  return (
    <Router>
        <div className="home-navbar">
            <header data-role="Header" className="home-header max-width-container">
                <div className="home-navbar1">
                    <div className="home-container01">
                        <Link to="/search" className="home-navlink">
                            <img
                                alt="search3271286"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                                className="home-image"
                            />
                        </Link>
                        <input
                            type="text"
                            placeholder="search"
                            className="home-textinput input"
                        />
                    </div>
                    <div className="home-middle">
                        <Link to='/' className="home-logo-center navbar-logo-title">
                            MARTCUHK
                        </Link>
                    </div>
                    <div className="home-icons">
                        <Link to="/shopping-cart" className="home-navlink01">
                            <img
                                alt="iconsbxscart3271299"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                                className="home-image3"
                            />
                        </Link>
                    </div>
                </div>
                <div data-role="BurgerMenu" className="home-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </div>
            </header>
        </div>
      <Switch>
        <Route component={ProductInfo} exact path="/product-info" />
        <Route component={Checkout} exact path="/checkout" />
        <Route component={PastOrders} exact path="/past-orders" />
        <Route component={Search} exact path="/search" />
        <Route component={TrackOrder} exact path="/track-order" />
        <Route component={PaymentSystem} exact path="/payment-system" />
        <Route component={PaymentSuccess} exact path="/payment-success" />
        <Route component={ShoppingCart} exact path="/shopping-cart" />
        <Route component={ReviewAndRating} exact path="/review-and-rating" />
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path='/login' />
        <Route component={Signup} exact path='/signup' />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
