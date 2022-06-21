import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <div>
      <p>ログイン完了</p>
      <p>{user?.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </div>
  ) : null;
};

export default LogoutButton;
