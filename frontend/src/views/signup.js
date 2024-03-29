import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import './login.css'

const SERVER_URL = 'localhost:5000'

function Signup(props) {
    const [errorMessage, setErrorMessage] = useState('')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const [isVerificationCodeInputDisabled, setIsVerificationCodeInputDisabled] = useState(true)
    const [verificationCode, setVerificationCode] = useState('')

    const history = useHistory();

    useEffect(() => {
        let timer
        if (isSendButtonDisabled) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
  
            setTimeout(() => {
                setIsSendButtonDisabled(false);
                clearInterval(timer);
            }, 60000);
        }

        return () => {
            clearInterval(timer);
          };
    }, [isSendButtonDisabled]);

    const signup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/signup`, {
                email: email,
                userName: userName,
                password: password,
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

    const sendVerificationEmail = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://${SERVER_URL}/api/signup-send-email`, {
                email: email
            })
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        }
        setIsSendButtonDisabled(true);
        setCountdown(60);
        setIsVerificationCodeInputDisabled(false)
    };

    return (
        <div>
            <div className='login-form' style={{top: "150px"}}>
                <h1 className='Heading-1'>Sign up</h1>
                <form onSubmit={(e) => signup(e)}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
                        <label htmlFor="email" className='lb' style={{fontSize: '20px', fontWeight: '400'}}>Email</label>
                        <input
                            type="email"
                            id="email"
                            className="input home-textinput"
                            style={{width: "30vw", backgroundColor: 'white', color: 'black', textAlign: 'center', padding: "1vh 1em"}}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete='on'
                            key="email-input"
                        />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
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
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
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
                </form>
                <form onSubmit={(e) => signup(e)}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
                        <label htmlFor="verification-code" className='lb' style={{fontSize: '20px', fontWeight: '400', ...(isVerificationCodeInputDisabled ? {color: '#D9D9D9'} : {})}}>Verification code</label>
                        <input
                            type="text"
                            id="verification-code"
                            className="input home-textinput"
                            style={{width: "30vw", backgroundColor: 'white', color: 'black', textAlign: 'center', padding: "1vh 1em", ...(isVerificationCodeInputDisabled ? { pointerEvents: 'none', borderBottomColor: '#D9D9D9' } : {})}}
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            autoComplete='on'
                            key="verification-code-input"
                            disabled={isVerificationCodeInputDisabled}
                        />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button id="send-code" className="button button-1" style={isSendButtonDisabled ? {pointerEvents: 'none', color: '#D9D9D9', border: '1px solid #D9D9D9'} : {}} onClick={e => sendVerificationEmail(e)} disabled={isSendButtonDisabled}>
                            <p>{isSendButtonDisabled ? `${countdown}s` : 'Send'}</p>
                        </button>
                        <button type="submit" id='submit-code' className="button" style={{margin: '6vh 0', width: '100px', display: 'flex', justifyContent: 'center' }}><p>Submit</p></button>
                    </div>
                </form>
                <Link to='/login' className='link'>Already have an account? Log in</Link>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>  
    )
}

export default Signup