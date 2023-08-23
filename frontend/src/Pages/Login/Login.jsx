import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.scss'


const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
      <label>
        <input
          type="email"
          placeholder="Brugernavn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />
      <label>
        <input
          type="password"
          placeholder="Adgangskode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <br />
      <button type="submit">Login</button>
    </form>
  );
};

//Here starts Signup Form
const SignUpForm = ({ onSubmit }) => {
  const [fullname, setFullName] =useState ('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullname, email, password });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        FullName:
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
     
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <br />
      <button type="submit">Sign Up</button>
      
    </form>
  );
};

const Login = () => {
  const handleLogin = (data) => {
    // Handle login logic
    console.log('Login:', data);
  };

  const handleSignUp = (data) => {
    // Handle sign up logic
    console.log('Sign Up:', data);
  };

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className='global-body-color' >
      {showSignUp ? (
        <SignUpForm onSubmit={handleSignUp} />
      ) : (
        <LoginForm onSubmit={handleLogin} />
      )}
      <p>
        {showSignUp
          ? 'Already have an account?'
          : "Don't have an account yet?"}
        <button onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Login;