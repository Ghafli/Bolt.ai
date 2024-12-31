import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Logging in with:', credentials);
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
