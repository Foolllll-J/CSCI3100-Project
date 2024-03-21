import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartItem from '../components/shopping-cart-item-card'

import './shopping-cart.css'
import axios from 'axios'

/**
 * Todo:
 * 右侧的布局
 * remove、加选择和全选
 * 传入参数
 */

const ShoppingCart = (props) => {
    const [selectStatusText, setSelectStatusText] = useState('Select All')
    const [itemList, setItemList] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);

    const fetchShoppingCartItems = async (shoppingCartInfo, userToken) => {
        try {
            const response = await axios.post(`http://${props.SERVER_URL}/api/fetch-shopping-cart-items`, {
                shoppingCartInfo: shoppingCartInfo,
                userToken: userToken
            })
            const items = response.data.shoppingCartItems
            setItemList(items)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message)
            } else {
                console.log('Some error occurs. Please try again later.')
            }
        }
    }

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const userToken = await props.getUserAndToken();
                await props.verifyUserToken(userToken);
                await fetchShoppingCartItems(props.user.shoppingCartInfo, props.userToken);
            } catch (error) {
                if (error.message === 'User token not found') {
                    props.updateUser({})
                    props.updateUserToken('')
                    window.location.href = '/login'
                } else {
                    Alert('Error:', error.message);
                }
            }
        };
    
        verifyToken();
    }, [])

    useEffect(() => {
        const updateFetch = async () => {
            await fetchShoppingCartItems(props.user.shoppingCartInfo, props.userToken);
        }
        updateFetch()
    }, [props.user.shoppingCartInfo]);
    
    const onSelected = (itemId) => {
        const isSelected = selectedItems.includes(itemId);
        let updatedSelectedItems
        if (isSelected) {
            updatedSelectedItems = selectedItems.filter((item) => item !== itemId);
            setSelectedItems(updatedSelectedItems);
        } else {
            updatedSelectedItems = [...selectedItems, itemId]
            setSelectedItems(updatedSelectedItems);
        }

        const allItemsSelected = itemList.every((item) => updatedSelectedItems.includes(item.product.productID));
        setSelectStatusText(allItemsSelected ? 'Unselect All' : 'Select All');
    };

    const selectAll = () => {
        if (selectStatusText === 'Select All') {
            setSelectStatusText('Unselect All');
            const allItemIds = itemList.map((item) => item.product.productID);
            setSelectedItems(allItemIds);
        } else {
            setSelectStatusText('Select All');
            setSelectedItems([]);
        }
    };

    const removeItems = async (itemArray) => {
        const shoppingCartInfo = [...props.user.shoppingCartInfo]
        const shoppingCartInfoToUpdate = shoppingCartInfo.filter((item) => !itemArray.includes(item.productID))
        try {
            const response = await axios.post(`http://${props.SERVER_URL}/api/update-shopping-cart`, {
                newCartContent: shoppingCartInfoToUpdate,
                userToken: props.userToken
            })
            const updatedUser = {...props.user}
            updatedUser.shoppingCartInfo = response.data.updatedCartContent
            props.updateUser(updatedUser)
        } catch (error) {
            console.log(error)
        }
    }

    const removeSelectedItems = async () => {
        await removeItems(selectedItems)
        setSelectedItems([])
    }

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-main">
        <div className="shopping-cart-blog section-container"></div>
        <div className="shopping-cart-container03">
          <div className="shopping-cart-container04">
            <h1 className="shopping-cart-text12 Heading-2">CART</h1>
            {(itemList && itemList instanceof Array && itemList.length !== 0) ? (<div className='shopping-cart-up' style={{border: '1px solid var(--dl-color-gray-900)', width: '55vw', minWidth: '500px', marginBottom: '15px'}}>
                <button type="button" onClick={selectAll} className='shopping-cart-button' style={{position: 'absolute', left: '15px', top: '50%', transform: 'translate(0, -50%)', width: '100px', alignSelf: 'flex-start', textAlign: 'left'}}>
                    {selectStatusText}
                </button>
                <button
                    type="button"
                    className={selectedItems.length === 0 ? "shopping-cart-button-disabled" : "shopping-cart-button"}
                    onClick={removeSelectedItems}
                    disabled={selectedItems.length === 0 ? true : false}>
                    Remove Selected Items
                </button>
            </div>) : (undefined)}
            <div className='shopping-cart-item-list-container'>
                {(itemList && itemList instanceof Array && itemList.length !== 0) ? (itemList.map(item => {
                    const itemId = item.product.productID
                    return (
                        <div id={`item-${itemId}`} key={itemId} className="list-group list-group-horizontal-lg margin-bot">
                            <ShoppingCartItem item={item} isSelected={selectedItems.includes(itemId)} onSelected={() => onSelected(itemId)} onRemove={() => removeItems([itemId])} />
                        </div>
                    )
                })) : (<div>No item in cart</div>)}
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
