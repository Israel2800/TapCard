import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './pages/Footer';
import Start from './pages/Start';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
// import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import MyCard from './pages/MyCard';
import CardView from './pages/CardView';
import homevid from "./images/home-background.mp4"
import useSound from 'use-sound';
import submitsound from './audio/mouseoversub.mp3'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div>
            <Routes>
              <Route 
                path="/" 
                element={<Start />} 
              />
              <Route 
                path="/home" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="*"
                element={<NoMatch />} 
              />
              <Route 
                path="/card/:id" 
                element={<CardView />} 
              />
              <Route 
                path="/mycard"
                element={<MyCard />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
