import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import './login.css'

const SERVER_URL = 'localhost:5000'

function Login(props) {
    const [status, setStatus] = useState('password')
    const [errorMessage, setErrorMessage] = useState('')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verificationCode, setVerificationCode] = useState('')

    const history = useHistory();

    useEffect(() => {
        
    }, [])

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/login`, {
                userName: userName,
                password: password
            })
            if (response.statusText === 'OK') {
                setErrorMessage('')
                setStatus('email-verification')
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
            setPassword('')
        }
    }

    const emailVerification = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/login-email-verification`, {
                verificationCode: verificationCode
            });
            const { user, userToken } = response.data;
            props.updateUser(user)
            props.updateUserToken(userToken)
            history.push('/');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
            setVerificationCode('')
        }
    };

    return (
        <div>
            <div className='login-form' style={{display: status === 'password' ? 'flex' : 'none'}}>
                <h1 className='Heading-1'>Log in</h1>
                <form onSubmit={(e) => login(e)}>
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
                            key="user-name-input"
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
                            key="password-input"
                        />
                    </div>
                    <button type="submit" id='send-password' className="button" style={{margin: '6vh 0', left: '50%', transform: 'translateX(-50%)'}}>Submit</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <Link to='/signup' className='link'>Don't have an account? Sign up</Link>
            </div>

            <div className='login-form' style={{display: status === 'email-verification' ? 'flex' : 'none'}}>
                <h1 className='Heading-1'>Log in</h1>
                <p style={{marginTop: '2vh', fontSize: '18px', fontWeight: '300'}}>A verification email is sent to your mail address.<br />Please check it and input the verification code.</p>
                <form>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4vh'}}>
                        <label htmlFor="verification-code" className='lb' style={{fontSize: '20px', fontWeight: '400'}}>Verification code</label>
                        <input
                            type="text"
                            id="verification-code"
                            className="input home-textinput"
                            style={{width: "30vw", backgroundColor: 'white', color: 'black', textAlign: 'center', padding: "1vh 1em"}}
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            autoComplete='on'
                            key="verification-code-input"
                        />
                    </div>
                    <button onClick={(e) => emailVerification(e)} id='submit-code' className="button" style={{margin: '6vh 0', left: '50%', transform: 'translateX(-50%)', width: '100px', display: 'flex', justifyContent: 'center' }}><p>Submit</p></button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>  
    )
}

export default Login