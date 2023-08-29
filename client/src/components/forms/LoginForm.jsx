import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const context = useContext(AuthContext);

  //Send later to the context function.
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log('Hello!', context);
  }, [context]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hi, this is user from the login', user);
    context.handleLogin(user);
  };
  if (!context.loading && context.user) {
    //in Mahmoud code he passes a Navigate component => < Navigate to='/' />;
    return <Navigate to="/" />;
  }
  if (!context.loading && !context.user) {
    return (
      <>
        {context.errors?.message}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button>➡️Log In⬅️</button>
        </form>
      </>
    );
  }
};

export default LoginForm;
