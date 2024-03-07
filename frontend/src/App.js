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

import Home from './components/HomePage';
import ProductInfo from './components/ProductInfoPage';
import Search from './components/SearchPage';
import ShoppingCart from './components/ShoppingCartPage';
import Payment from './components/PaymentPage';
import OrderTracking from './components/OrderTrackingPage';
import Login from './components/LoginPage';


function App() {
    const [hello, setHello] = useState("")

    useEffect(() => {
        setHello("Hello World")
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <h1>{hello}</h1>
            </div>

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
