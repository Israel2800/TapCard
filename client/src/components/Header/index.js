import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import image from '../../images/tapcardsilver.png';
import '../../index.css'

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (

    <header className="bg-secondary mb-5 py-2 flex-row align-center">
      <div className="flex-row justify-space-between-lg justify-center align-center ">
        <Link to="/home">
          <h1><img alt='a logo for buttheads' src={image} height={100} width={400} /></h1>
        </Link>

        <nav className="text-center mb-5">
          {Auth.loggedIn() ? (
            <>
              <Link to="/mycard">My Card</Link>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
