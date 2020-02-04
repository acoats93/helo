import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
      <Form />
      <Nav />
      <Post />
    </div>
  );
}

export default App;
