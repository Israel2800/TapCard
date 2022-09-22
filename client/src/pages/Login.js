import React, { useState } from 'react';
import "../login.css";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <div className="login">
      <div className="col-6 col-md-3">
        <div className="loginCard">
          <h4 className="loginHeader">Login</h4>
          <div className="loginBody">
            <form onSubmit={handleFormSubmit}>
              <input
                className="loginform-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="loginform-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="logbtn d-block w-30" type="submit">
                Submit
              </button>
            </form>

            {error && <div className='errtxt'>Signup failed!</div>}
          </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
