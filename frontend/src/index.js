import React from 'react'
import ReactDOM from 'react-dom'
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

const App = () => {
  return (
    <Router>
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
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
