import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartItem from '../components/shopping-cart-item-card'

import './shopping-cart.css'

/**
 * Todo:
 * 右侧的布局
 * remove、加选择和全选
 * 传入参数
 */

const ShoppingCart = (props) => {
    const [selectStatusText, setSelectStatusText] = useState('Select All')

    const selectAll = () => {
        if (selectStatusText === 'Select All') {
            setSelectStatusText('Unselect All')
        } else {
            setSelectStatusText('Select All')
        }
    }

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-main">
        <div className="shopping-cart-blog section-container"></div>
        <div className="shopping-cart-container03">
          <div className="shopping-cart-container04">
            <h1 className="shopping-cart-text12 Heading-2">CART</h1>
            <div className='shopping-cart-up' style={{border: '1px solid var(--dl-color-gray-900)', width: '55vw', minWidth: '500px', marginBottom: '15px'}}>
                <button type="button" onClick={selectAll} className='shopping-cart-button' style={{position: 'absolute', left: '15px', top: '50%', transform: 'translate(0, -50%)', width: '100px', alignSelf: 'flex-start', textAlign: 'left'}}>
                    {selectStatusText}
                </button>
                <button type="button" className="shopping-cart-button">
                    Remove Selected Items
                </button>
            </div>
            <div className='shopping-cart-item-list-container'>
                <ShoppingCartItem />
                <ShoppingCartItem />
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
