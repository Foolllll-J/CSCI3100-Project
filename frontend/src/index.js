import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import axios from 'axios'

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
import SearchBox from './components/navigator-search-box'

const SERVER_URL = 'localhost:5000'

function App() {
    const [user, setUser] = useState({})
    const [userToken, setUserToken] = useState('')
    const [searchText, setSearchText] = useState('')
    const [searchCategory, setSearchCategory] = useState('')

    const [isToastShown, setIsToastShown] = useState(false)
    const [toastText, setToastText] = useState('')

    useEffect(() => {
        const fetchToken = async () => {
            try {
                await getUserAndToken();
            } catch (error) {
                if (error.message === 'User token not found') {
                    updateUser({});
                    updateUserToken('');
                    window.location.href = '/login';
                } else {
                    console.log('Error:', error.message);
                }
            }
        };
      
        fetchToken();
    }, []);

    const updateUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    const updateUserToken = (userToken) => {
        localStorage.setItem('userToken', JSON.stringify(userToken))
        setUserToken(userToken)
    }

    const getUserAndToken = () => {
        return new Promise((resolve, reject) => {
            const storedUserToken = localStorage.getItem('userToken');
            const storedUser = localStorage.getItem('user');
            if (storedUserToken && storedUserToken !== undefined && storedUserToken !== 'undefined') {
                const userToken = JSON.parse(storedUserToken);
                setUserToken(userToken);
                if (storedUser && storedUser !== undefined && storedUser !== 'undefined') {
                    const user = JSON.parse(storedUser);
                    setUser(user)
                }
                resolve(userToken);
            }
            reject(new Error('User token not found'));
        });
    }

    const verifyUserToken = async (userToken) => {
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/verify-user-token`, {
                userToken: userToken
            })
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message === 'Expired or wrong user token') {
                localStorage.removeItem('user')
                localStorage.removeItem('userToken')
                setUser({})
                setUserToken('')
                window.location.href = '/login'
                alert('Your login has been expired. Please log in again.')
            } else if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('Some error occurs. Please try again later.')
            }
        }
    }

    async function logout() {
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/logout`, {
                userToken: userToken
            })
            localStorage.removeItem('user')
            localStorage.removeItem('userToken')
            setUser({})
            window.location.href = '/'
        } catch(error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message);
            }
        }
    }

    const showToast = (text, time) => {
        setToastText(text);
        setIsToastShown(true);
    
        setTimeout(() => {
          setIsToastShown(false);
        }, time);
      }

    return (
        <Router>
            <div className="home-navbar">
                <header data-role="Header" className="home-header max-width-container">
                    <div className="home-navbar1">
                        <SearchBox searchText={searchText} setSearchText={setSearchText} />
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
                                    className="home-image2"
                                />
                            </Link>
                            { user && user.userName ? (
                                <div className="home-navlink01 navbar-button" onClick={logout}>
                                    <svg t="1710857797384" className="home-image3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6469" width="200" height="200"><path d="M950.71 521.786L757.935 329.011c-11.019-11.019-29.861-3.215-29.861 12.369v115.928H412.098c-28.821 0-52.188 32.546-52.188 72.687s23.367 72.687 52.188 72.687h315.977V726.93c0 15.584 18.841 23.388 29.861 12.369L950.71 546.523c6.831-6.831 6.831-17.906 0-24.737z" p-id="6470" fill="#161616"></path><path d="M547.856 799.32H183.095l0.168-574.639h364.593v201.124h114.928V224.68c0-63.37-51.558-114.928-114.928-114.928H183.095c-63.37 0-114.928 51.558-114.928 114.928v574.64c0 63.37 51.558 114.928 114.928 114.928h364.761c63.37 0 114.928-51.558 114.928-114.928V634.184H547.856V799.32zM183.081 224.68l0.014-57.464v57.464h-0.014z" p-id="6471" fill="#161616"></path></svg>
                                </div>
                            ) : (<Link to="/login" className="home-navlink01">
                            <img
                                alt="AccountCircle3271301"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                                className="home-image3"
                            />
                        </Link>)}
                        </div>
                    </div>
                    <div data-role="BurgerMenu" className="home-burger-menu">
                        <svg viewBox="0 0 1024 1024" className="home-icon">
                            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                    </div>
                </header>
                {isToastShown && (
                    <div className="toast">
                        <div className="toast-content">{toastText}</div>
                    </div>
                )}
            </div>
        <Switch>
            <Route
                exact
                path="/product-info/:id"
                render={(props) => <ProductInfo 
                                    {...props}
                                    SERVER_URL={SERVER_URL}
                                    user={user}
                                    updateUser={updateUser}
                                    userToken={userToken}
                                    updateUserToken={updateUserToken}
                                    getUserAndToken={getUserAndToken}
                                    verifyUserToken={verifyUserToken}
                                    showToast={showToast}/>} />
            <Route exact path="/checkout" render={(props) => <Checkout {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route exact path="/past-orders" render={(props) => <PastOrders {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route
                exact
                path="/search/:keyword/:category/:page"
                render={(props) => <Search
                                    {...props}
                                    SERVER_URL={SERVER_URL}
                                    user={user}
                                    updateUser={updateUser}
                                    userToken={userToken}
                                    updateUserToken={updateUserToken}
                                    getUserAndToken={getUserAndToken}
                                    verifyUserToken={verifyUserToken}
                                    showToast={showToast} />} />
            <Route exact path="/track-order" render={(props) => <TrackOrder {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route exact path="/payment-system" render={(props) => <PaymentSystem {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route exact path="/payment-success" render={(props) => <PaymentSuccess {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route exact path="/shopping-cart" render={(props) => <ShoppingCart {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route exact path="/review-and-rating" render={(props) => <ReviewAndRating {...props} SERVER_URL={SERVER_URL} user={user} updateUser={updateUser} userToken={userToken} updateUserToken={updateUserToken} getUserAndToken={getUserAndToken} verifyUserToken={verifyUserToken} showToast={showToast} />} />
            <Route exact path="/" component={Home} />
            <Route
                exact
                path='/login'
                render={(props) => {
                    if (!(user && user.userName && userToken !== '')) {
                    return (
                        <Login
                            {...props}
                            SERVER_URL={SERVER_URL}
                            user={user}
                            updateUser={updateUser}
                            userToken={userToken}
                            updateUserToken={updateUserToken}
                            getUserAndToken={getUserAndToken}
                            verifyUserToken={verifyUserToken}
                            showToast={showToast}
                        />
                    );
                    } else {
                        return <Redirect to="/" />;
                    }
                }}
            />     
            <Route
                exact
                path='/signup'
                render={(props) => {
                    if (!(user && user.userName && userToken !== '')) {
                    return (
                        <Signup
                            {...props}
                            SERVER_URL={SERVER_URL}
                            user={user}
                            updateUser={updateUser}
                            userToken={userToken}
                            updateUserToken={updateUserToken}
                            verifyUserToken={verifyUserToken}
                            showToast={showToast}
                        />
                    );
                    } else {
                        return <Redirect to="/" />;
                    }
                }}
            />             
            <Route component={NotFound} path="**" />
            <Redirect to="**" />
        </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))