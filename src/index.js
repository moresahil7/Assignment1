import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Details from './components/Details';

import Redirect from 'react-dom'






ReactDOM.render(
<Router>
<Routes>
<Route path="/users" element={<App/>} />

<Route path="/users/:id" element={<Details />} />
</Routes>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
