import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getUserByUsername } from './getUserByUsername';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.graphql({
        query: getUserByUsername,
        variables: { username },
        authMode: 'AMAZON_COGNITO_USER_POOLS', // Specify the authentication mode as Amazon Cognito User Pools

      });

      if (data.getUserByUsername) {
        const user = data.getUserByUsername;
        if (user.password === password) {
          console.log('Logged in successfully');
          navigate('/');
        } else {
          setError('Invalid username or password');
          setUsername('');
          setPassword('');
        }
      } else {
        setError('Invalid username or password');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
