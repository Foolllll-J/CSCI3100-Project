import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './product-info.css'


const ProductInfo = (props) => {
    const [displayedProduct, setDisplayedProduct] = useState(null)
    const [number, setNumber] = useState('1')
    const [buttonStatus, setButtonStatus] = useState('normal')

    const { id } = useParams()

    const fetchProductInfo = async (id='0') => {
        try {
            const response = await axios.post(`http://${props.SERVER_URL}/api/fetch-product-info`, {
                productID: id
            })
            setDisplayedProduct(response.data.productInfo)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message)
            } else {
                console.log('Some error occurs. Please try again later.')
            }
        }
    }

    useEffect(() => {
        fetchProductInfo(id)
    }, [id])

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const regex = /^[0-9\b]+$/
        
        if (regex.test(inputValue)) {
            let parsedValue = parseInt(inputValue)
            if (parsedValue < 1 || isNaN(parsedValue)) {
                parsedValue = 1;
            } 
            setNumber(parsedValue);
        }
    }

    const numberIncrement = () => {
        const parsedNumber = parseInt(number);
        if (isNaN(parsedNumber)) {
            setNumber('1');
        } else {
            setNumber(String(parsedNumber + 1));
        }
    }

    const numberDecrement = () => {
        const parsedNumber = parseInt(number);
        if (isNaN(parsedNumber) || parsedNumber <= 1) {
            setNumber('1');
        } else {
            setNumber(String(parsedNumber - 1));
        }
    }

    const addToCart = async () => {
        let flag = false
        const shoppingCartInfo = [...props.user.shoppingCartInfo]
        shoppingCartInfo.map((item) => {
            if (item.productID === id) {
                const prevQ = item.quantity
                item.quantity = prevQ + parseInt(number)
                flag = true
            }
        })
        if (!flag) {
            const item = {
                productID: id,
                quantity: parseInt(number)
            }
            shoppingCartInfo.push(item)
        }
        try {
            setButtonStatus('adding')
            const response = await axios.post(`http://${props.SERVER_URL}/api/update-shopping-cart`, {
                newCartContent: shoppingCartInfo,
                userToken: props.userToken
            })
            setTimeout(() => {
                setButtonStatus('finished');
                setTimeout(() => {
                    setButtonStatus('normal');
                }, 1500);
            }, 1500);
            const updatedUser = {...props.user}
            updatedUser.shoppingCartInfo = response.data.updatedCartContent
            props.updateUser(updatedUser)
        } catch (error) {
            console.log(error)
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
            <div className="product-info-container06">
                <div className="product-info-container07">
                    <div style={{marginBottom: '20px'}}>
                        <span style={{fontSize: '28px', fontWeight: '600'}}>{displayedProduct ? displayedProduct.productName : 'Name'}</span>
                        <br />
                        <span style={{fontSize: '14px'}}>{displayedProduct ? displayedProduct.productID : 'ID'}</span>
                    </div>
                    <span className="product-info-text13" style={{fontSize: '20px', color: 'var(--green-light)'}}>
                        {displayedProduct ? displayedProduct.productPrice + ' HKD' : '0 HKD'}
                    </span>
                </div>
                <div className="product-info-set-number">
                    <button className='button' onClick={numberDecrement} style={{width: '50px', display: 'flex', justifyContent: 'center'}}><span>-</span></button>
                    <input type='text' value={number} onChange={e => handleInput(e)} style={{width: '70px', height: '40px', borderTop: '0.5px solid var(--dl-color-gray-black80)', borderBottom: '0.5px solid var(--dl-color-gray-black80)', textAlign: 'center'}} />
                    <button className='button' onClick={numberIncrement} style={{width: '50px', display: 'flex', justifyContent: 'center' }}><span>+</span></button>
                </div>
                <button
                    onClick={buttonStatus === 'normal' ? () => addToCart() : () => {}}
                    className="product-info-navlink2 button"
                    style={{width: '140px', display: 'flex', justifyContent: 'center'}}>
                    {buttonStatus === 'normal' ? <span style={{lineHeight: '20px'}}>Add to Cart</span> : undefined}
                    {buttonStatus === 'adding' ? <span className="loader" style={{ width: '20px', height: '20px' }}></span> : undefined}
                    {buttonStatus === 'finished' ? <span style={{lineHeight: '20px'}}>Done!</span> : undefined}
                </button>
            </div>
            <div className="product-info-text15">
                {displayedProduct ? displayedProduct.productDescription: displayedProduct}
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
