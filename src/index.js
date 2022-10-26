import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box } from '@mui/material';

import { createBrowserRouter, Link, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import { Home } from './containers/Home';
import { NewsList } from './containers/NewsList';
import { NewsDetail } from './containers/NewsDetail';
import { Login } from  './containers/Login'
import { Register } from  './containers/Register'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/news' element={<NewsList />}/>
    <Route path='/news/:newsId' element={<NewsDetail />} />
    <Route path='*' element={
      <Box sx={{
        display: 'flex',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '80vh'
      }}>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-page-warning-5846701-4923060@0.png" alt="404" />
        <p>You have reach the edge of the world</p>
        <Link to="/">Take me home!</Link>
      </Box>
    } />
  </Route>
))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
