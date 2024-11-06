import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'fardeen@gmail.com' && password === 'password123') {
      navigate('/dashboard');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">BASE</div>
        <div className="social-icons">
          <FaGithub />
          <FaTwitter />
          <FaLinkedin />
          <FaDiscord />
        </div>
      </div>
      <div className="login-right">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <button className="google-btn">Sign in with Google</button>
        <button className="apple-btn">Sign in with Apple</button>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <div className="register">
          Don't have an account? <a href="/register">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
