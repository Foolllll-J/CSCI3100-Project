import React, {useState, useEffect} from 'react'

import '../views/shopping-cart.css'

const ShoppingCartItem = (props) => {
    const [itemObj, setItemObj] = useState(props.item)
    const [number, setNumber] = useState('0')
    const [isSelected, setIsSelected] = useState(props.isSelected)

    

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

    useEffect(() => {
        setIsSelected(props.isSelected)
    }, [props.isSelected])

    return (
        <div className="shopping-cart-container05">
            <div className='shopping-cart-up'>
                <div
                    onClick={props.onSelected}
                    className= 'shopping-cart-checkbox checkbox-selected'
                >
                    {isSelected ? <svg t="1710938861964" style={{width: '16px', height: '16px', left: '1px', top: '0px', position: 'relative'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7600" width="200" height="200"><path d="M369.792 704.32L930.304 128 1024 223.616 369.984 896l-20.288-20.864-0.128 0.128L0 516.8 96.128 423.68l273.664 280.64z" p-id="7601"></path></svg> : undefined}
                </div>
                <button type="button" className="shopping-cart-button" onClick={props.onRemove}>
                    Remove
                </button>
            </div>
            <div className='shopping-cart-down'>
                <div className="shopping-cart-container06">
                    <div className="shopping-cart-container07">
                    <img
                        alt={itemObj.product.productImage}
                        src={itemObj.product.productImage}
                        //src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="shopping-cart-image4"
                    />
                    </div>
                </div>
                <div className="shopping-cart-container08">
                    <div className="shopping-cart-text14">
                        <span style={{wordWrap: 'break-word'}}>{itemObj.product.productName}</span>
                    </div>
                    <div className="shopping-cart-container10">
                        <div className="shopping-cart-container11">
                        <span className="shopping-cart-text15">{itemObj.product.productPrice} HKD</span>
                        </div>
                    </div>
                    <div className="shopping-cart-container12">
                        <button className='button' onClick={numberDecrement} style={{width: '50px', display: 'flex', justifyContent: 'center'}}><span>-</span></button>
                        <input type='text' value={number} onChange={e => handleInput(e)} style={{width: '70px', height: '40px', borderTop: '0.5px solid var(--dl-color-gray-black80)', borderBottom: '0.5px solid var(--dl-color-gray-black80)', textAlign: 'center'}} />
                        <button className='button' onClick={numberIncrement} style={{width: '50px', display: 'flex', justifyContent: 'center' }}><span>+</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItem