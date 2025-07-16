import React, { useState } from 'react'

const Signin = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login - in real app, verify credentials
    if (formData.username && formData.password) {
      setUser(formData.username);
    } else {
      alert('Please enter both username and password');
    }
  };
  return (
    <div>
      <div className="App">
      {!user ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="desktop-display">
          <h2>Welcome, {user}!</h2>
          <p>You are now logged in.</p>
        </div>
      )}
    </div>


    </div>
  )
}

export default Signin