import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for navigation

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Signup({ signOut, user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/'); // Redirect to the home page if the user is signed in
    }
  }, [user, navigate]);

  return (
    <>
      <h1>Hello {user ? user.username : ''}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Signup);
