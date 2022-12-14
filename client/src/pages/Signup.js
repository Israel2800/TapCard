import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import '../../src/signupStyle.css'
import Auth from '../utils/auth';
import useSound from 'use-sound';
import submitsound from '../audio/mouseoversub.mp3'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    
    <div className="signin flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="signCard">
          <h4 className="signHeader">Sign Up</h4>
          <div className="signBody">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="sigbtn d-block w-100" type="submit">
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

export default Signup;
