import React, { useState } from 'react';

function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
    alert(`
      Full Name: ${fullName}
      Email: ${email}
      Password: ${password}
    `);
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Account</h2>
        <img src='./../public/vite.svg' style={{paddingLeft:0, marginLeft:'0px', 
          left:''
        }}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">
            Full Name
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <div className="or-container">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>
        <button className="google-btn">Sign Up with Google</button>
        <p className="login-text">
          Already have an ocasia? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
