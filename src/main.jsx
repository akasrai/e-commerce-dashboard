import { StrictMode } from 'react';
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Auth0Provider } from '@auth0/auth0-react';


import AppRoutes from './Routes.jsx'
import AuthContext from './components/AuthContext.jsx';

import './index.css'

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const AUTH0_CALLBACK_PATH = import.meta.env.VITE_CALLBACK_PATH;

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin + AUTH0_CALLBACK_PATH,
    }}
  >
    <AuthContext>
      <BrowserRouter>
        <StrictMode>
          <AppRoutes />
          <ToastContainer />
        </StrictMode>
      </BrowserRouter>
    </AuthContext>
  </Auth0Provider>
);
