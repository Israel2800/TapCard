import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
import Home from './Home';


const Start = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/signup');
      };
    return (
      <main className='start'>       
      </main>
    );
  };
  
  export default Start;
  