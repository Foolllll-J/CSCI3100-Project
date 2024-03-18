import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import './product-info.css'


const ProductInfo = (props) => {
    const [number, setNumber] = useState('0')

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const regex = /^[0-9\b]+$/
        
        if (inputValue === '' || regex.test(inputValue)) {
            setNumber(inputValue);
        }
    }

    const numberIncrement = () => {
        const parsedNumber = parseInt(number);
        if (isNaN(parsedNumber)) {
            setNumber('0');
        } else {
            setNumber(String(parsedNumber + 1));
        }
    }

    const numberDecrement = () => {
        const parsedNumber = parseInt(number);
        if (isNaN(parsedNumber) || parsedNumber <= 0) {
            setNumber('0');
        } else {
            setNumber(String(parsedNumber - 1));
        }
    }
    
  return (
    <div className="product-info-container">
      <div className="product-info-main">
        <div className="product-info-feature1">
          <div className="product-info-container03">
            <img
              alt="image"
              src="/external/iphonex-1200w-200w.png"
              image_src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="product-info-image4"
            />
          </div>
          <div className="product-info-container04">
            <div className="product-info-container05">
              <div className="product-info-container06">
                <div className="product-info-container07">
                  <h3 className="Headline3">商品名</h3>
                  <span className="product-info-text13">商品价格</span>
                </div>
                <div className="product-info-set-number">
                        <button className='button' onClick={numberDecrement} style={{width: '50px', display: 'flex', justifyContent: 'center'}}><span>-</span></button>
                        <input type='text' value={number} onChange={e => handleInput(e)} style={{width: '70px', height: '40px', borderTop: '0.5px solid var(--dl-color-gray-black80)', borderBottom: '0.5px solid var(--dl-color-gray-black80)', textAlign: 'center'}} />
                        <button className='button' onClick={numberIncrement} style={{width: '50px', display: 'flex', justifyContent: 'center' }}><span>+</span></button>
                    </div>
                <button
                  className="product-info-navlink2 button"
                >
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="product-info-container08">
                <div className="product-info-container09"></div>
              </div>
            </div>
            <span className="product-info-text15">
              商品信息dolor sit amet, consectetur adipiscing elit. Condimentum
              diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
              egestas odio cras adipiscing vulputate. Nisi, risus in suscipit
              non. Non commodo volutpat, pharetra, vel.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
