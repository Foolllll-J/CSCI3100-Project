import '../style.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

function Login() {
    const [status, setStatus] = useState('login')
    const [errorMessage, setErrorMessage] = useState('')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState({})

    async function login (e) {
        /*e.preventDefault();
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/login`, {
                username: username,
                password: password
            });
            const { user } = response.data;
            onLogin(user)
            navigate('/');
        } catch (error) {
            if (error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
            setPassword('')
        }*/
    };

    return (
        <div className='login-form'>
            <h1 className='Heading-1'>Log in</h1>
            <form onSubmit={login}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4vh'}}>
                    <label htmlFor="user-name" className='lb' style={{fontSize: '20px', fontWeight: '400'}}>User Name</label>
                    <input
                        className="input home-textinput"
                        style={{width: "30vw", backgroundColor: 'white', color: 'black', textAlign: 'center', padding: "1vh 1em"}}
                        type="text"
                        id="user-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        autoComplete='on'
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4vh'}}>
                    <label htmlFor="password" className='lb' style={{fontSize: '20px', fontWeight: '400'}}>Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input home-textinput"
                        style={{width: "30vw", backgroundColor: 'white', color: 'black', textAlign: 'center', padding: "1vh 1em"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='on'
                    />
                </div>
                <button type="submit" id='send' className="button" style={{margin: '6vh 0', left: '50%', transform: 'translateX(-50%)'}}>Submit</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <Link to='/signup'>Don't have an account? Sign up</Link>
        </div>
    )
}

export default Login