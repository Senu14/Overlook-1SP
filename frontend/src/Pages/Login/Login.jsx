import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.scss'


// //Here starts Loin Form
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <br />
      <label>
        <input
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
    onSubmit(email, Adgangskode);
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
  const handleLogin = async ({ email, Adgangskode }) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: Adgangskode }),
      });

      const data = await response.json();
  
      if (response.ok) {
// Save the access token in the local storage
        localStorage.setItem('access_token', data.access_token);
  
// Redirect to the user's dashboard or any other page
        window.location.href = '/';
      } else {
        console.error('Login failed:', data.message);
// Handle the login failure, e.g., by showing an error message to the user
      }

// Rest of the code remains the same
    } catch (error) {
      console.error('An error occurred:', error);
    }
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
     
        {showSignUp
          ? 'Already have an account?'
          : "Don't have an account yet?"}
        <button className="third-button" onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? 'Login' : 'Sign Up'}
        </button>
     
    </div>



  );
};

export default Login;