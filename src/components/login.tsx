import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return isAuthenticated ? null : <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
