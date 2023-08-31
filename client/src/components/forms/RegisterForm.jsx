import { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Navigate } from 'react-router-dom';

const RegisterForm = () => {
  const context = useContext(AuthContext);
  const errors = context.errors;

  //Send later to the context function.
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    context.handleRegister(formState);
  };

  if (!context.loading && context.user) {
    return <Navigate to="/" />;
  }
  if (!context.loading && !context.user) {
    return (
      <>
        {context.errors?.message}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          {errors?.email && (
            <p className="text-red-600">{errors?.email.message}</p>
          )}
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          {errors?.password && (
            <p className="text-red-600">{errors?.password.message}</p>
          )}
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          {errors?.confirmPassword && (
            <p className="text-red-600">{errors?.confirmPassword.message}</p>
          )}
          <input
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
            required
          />
          <button>➡️Register⬅️</button>
        </form>
      </>
    );
  }
};
export default RegisterForm;