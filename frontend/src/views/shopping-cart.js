import React from 'react'
import { Link } from 'react-router-dom'

import './shopping-cart.css'

const ShoppingCart = (props) => {
  return (
    <div className="shopping-cart-container">
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
    </div>
  )
}

export default ShoppingCart
