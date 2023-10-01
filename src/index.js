import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignInSide from './SignInSide';
import SignIn from './SignIn';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<SignInSide/>}/>
    <Route path="/" element={ <SignIn/>}/>
    {/* <App /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

