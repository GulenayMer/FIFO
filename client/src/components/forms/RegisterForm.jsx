import { useState, useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Link, Navigate } from 'react-router-dom';
import user from '../../assets/user.svg';

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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div>
          <img
            className="hover:animate-bounce mx-auto h-10 w-auto"
            src={user}
            alt="user"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to FIFO
          </h2>
        </div>

        {context.errors?.message}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="name"
              >
                Name:
              </label>
              {errors?.name && (
                <p className="focus:ring-red-600">{errors?.name.message}</p>
              )}
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="email"
              >
                Email:
              </label>
              {errors?.email && (
                <p className="focus:ring-red-600">{errors?.email.message}</p>
              )}
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="password"
              >
                Password:
              </label>
              {errors?.password && (
                <p className="focus:ring-red-600">{errors?.password.message}</p>
              )}
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="confirmPassword"
              >
                Confirm Password:
              </label>
              {errors?.confirmPassword && (
                <p className="focus:ring-red-600">
                  {errors?.confirmPassword.message}
                </p>
              )}
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register
              </button>
            </div>
          </form>
          <Link
            className="block mt-5 text-center text-sm text-gray-500"
            to="/"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }
};
export default RegisterForm;
