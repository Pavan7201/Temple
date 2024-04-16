import React, { useState } from 'react'; 
import './Login.css'; // Make sure to use correct CSS file

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
  };

  const switchForm = () => {
    // Redirect to signup page
    window.location.href = '/signup';
  };

  return (
    <div className="LoginForm">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
      <p onClick={switchForm}>Don't have an account? Sign Up</p>
    </div>
  );
}

export default LoginForm;
