import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './Login.scss'

//Here starts Loin Form
const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [Adgangskode, setAdgangskode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, Adgangskode });
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
      <label>
        <input className='login'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />
      <label>
        <input className='login'
          type="password"
          placeholder="Adgangskode"
          value={Adgangskode}
          onChange={(e) => setAdgangskode(e.target.value)}
        />
      </label>

      <br />
      <button type="submit">Login</button>
    </form>
  );
};

//Here starts Signup Form
const SignUpForm = ({ onSubmit }) => {
  const [Navn, setNavn] =useState ('');
  const [email, setEmail] = useState('');
  const [Adgangskode, setAdgangskode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ Navn, email, Adgangskode });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        Navn:
        <input 
          type="text"
          value={Navn}
          onChange={(e) => setNavn(e.target.value)}
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
        Adgangskode:
        <input
          type="Password"
          value={Adgangskode}
          onChange={(e) => setAdgangskode(e.target.value)}
        />
      </label>

      <br />
      <button type="submit">Sign Up</button>
      
    </form>
  );
};

const Login = () => {
  const handleLogin = (data) => {
    // her håndter vi login 
    console.log('Login:', data);
  };

  const handleSignUp = (data) => {
    // her håndter vi signup 
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
        {/* {showSignUp
          ? 'Already have an account?'
          : "Don't have an account yet?"}
        <button onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? 'Login' : 'Sign Up'}
        </button> */}
      </p>
    </div>



  );
};

export default Login;