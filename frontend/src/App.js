import './App.css';
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation,
    Navigate,
    useNavigate
} from 'react-router-dom';

import AdminPage from './components/AdminPage';
import Home from './components/HomePage';
import ProductInfo from './components/ProductInfoPage';
import Search from './components/SearchPage';
import ShoppingCart from './components/ShoppingCartPage';
import Payment from './components/PaymentPage';
import OrderTracking from './components/OrderTrackingPage';
import Login from './components/LoginPage';


function App() {
    const [user, setUser] = useState({})
    const [isUserNameHovered, setIsUserNameHovered] = useState(false)

    useEffect(() => {
        setUser({
            email: "niumoniumo@gmail.com",
            password: "qqwwee",
            userName: "niumo",
            shoppingCartInfo: [],
            orderHistory: {}
        })
    }, [])

    function onMouseEnterUserName() {
        setIsUserNameHovered(true);
    }

    function onMouseLeaveUserName() {
        setIsUserNameHovered(false);
    }

    // Todo
    function logout() {
        console.log(1)
    }

    return (
        <BrowserRouter>
            <nav>
                <div className='width-50 flex' style={{height: '100%'}}>
                    <div className='nav-cell left'>
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div className='width-50 flex' style={{height: '100%', flexDirection: 'row-reverse'}}>
                    <div className='nav-cell right' onMouseEnter={user.username ? onMouseEnterUserName : undefined} onMouseLeave={user.username ? onMouseLeaveUserName : undefined}>
                        {user && user.username ?
                        <div className='user-name'>{user.username.length > 10 ? user.username.substring(0, 8) + '...' : user.username}</div> :
                        <Link to='/login' className='user-name' style={{cursor: 'pointer'}}>Login</Link>}
                    </div>
                    <div className='dropdown' style={{display: isUserNameHovered ? 'flex' : 'none'}} onMouseEnter={onMouseEnterUserName} onMouseLeave={onMouseLeaveUserName}>
                        <Link className='dropdown-cell' to='favorites'> My favorites</Link>
                        <div className='dropdown-cell' onClick={logout}>Log out</div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-info" element={<ProductInfo />} />
                <Route path="/search" element={<Search />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order-tracking" element={<OrderTracking />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
}

// No matched link
const NoMatch = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [time, setTime] = useState(5);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    useEffect(() => {
      if (time === 0) {
        navigate('/');
      }
    }, [time]);

    return (
        <div className='main-container'>
            <h3>
                No match or no access permission for <code>{location.pathname}</code>!<br />
                Redirecting to home page in {time}s...
            </h3>
        </div>
    );
};

export default App;
