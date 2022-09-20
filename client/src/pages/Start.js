import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
import Home from './Home';


const Start = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/signup');
      };
    return (
      <main>
        <div className="col-12 mb-3">

            <button onClick={navigateToHome} className="btn col-12 col-md-3" type="submit">
                Start your taps!
            </button>
        </div>
          
      </main>
    );
  };
  
  export default Start;
  