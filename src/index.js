import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
    <ToastContainer position='top-right' />
  </AuthProvider>
  // </React.StrictMode>
);

