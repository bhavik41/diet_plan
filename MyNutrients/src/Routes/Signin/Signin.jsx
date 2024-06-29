import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Signin.scss';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation
  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/users/signin', { username, password });
            console.log('Response:', response.data);

            if (response.data.success) {
                // Handle successful login (e.g., store token, redirect to landing page)
                const redirectTimeout = 0; // Adjust delay in milliseconds
                setTimeout(() => navigate('/Home'), redirectTimeout);
            } else {
                console.error('Login failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user.access_token) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data)
                        setProfile(res.data);
                        setTimeout(() => navigate('/Home'),{ state: { profile: res.data } });
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user,navigate ]
    );
 const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <section className="signin">
            <form className="form" onSubmit={handleSubmit}>
                <p id="heading">Login</p>
                <div className="login-button">
                    <button type="button" className="button" onClick={login}><FcGoogle />Continue with Google</button>
                    <button type="button" className="button"><FaLinkedin />Continue with LinkedIn </button>
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input className="input-field"
                        placeholder="Username"
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input className="input-field"
                        placeholder="Password"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <div className="btn">
                    <button type="submit" className="button1">
                        Sign in
                    </button>
                    <span>
                        Don't have an account yet? <Link to='/signup'>Sign Up</Link>
                    </span>
                </div>
                {/* <button type="button" className="button3">Forgot Password</button> */}
            </form>
        </section>
    );
};

export default SignIn;
