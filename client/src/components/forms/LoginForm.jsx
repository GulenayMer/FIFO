import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth';
import { Link, Navigate, redirect } from 'react-router-dom';
import key from '../../assets/key.svg';

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
      <div className="flex min-h-full flex-col justify-center pt-10 px-6 py-12 lg:px-8">
        <div>
          <img
            className="hover:animate-bounce mx-auto h-10 w-auto"
            src={key}
            alt="key"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
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
                htmlFor="email"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Log in
              </button>
            </div>
          </form>
          <Link
            className="block mt-5 text-center text-sm text-gray-500"
            to="/register"
          >
            Not Registered?
          </Link>
        </div>
      </div>
    );
  }
};

export default LoginForm;
