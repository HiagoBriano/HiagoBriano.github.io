import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Redirect from './pages/Redirect';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Redirect />
    </BrowserRouter>
  );
}

export default App;
