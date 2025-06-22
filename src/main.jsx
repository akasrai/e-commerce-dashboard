import { StrictMode } from 'react';
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Auth0Provider } from '@auth0/auth0-react';


import AppRoutes from './Routes.jsx'
import AuthContext from './components/AuthContext.jsx';

import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-8ly62yv06gunguen.us.auth0.com"
    clientId="MttJ8WhMEI0ijOMvoYsL7KnKU91lXweO"
    authorizationParams={{
      redirect_uri: window.location.origin + "/auth0/callback",
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
