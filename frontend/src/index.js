// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from '@auth0/auth0-react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Auth0Provider
//     domain="dev-ftsuja10zlcgds1j.us.auth0.com"
//     clientId="dZwjuvA0D7oLQJBh8mmYwqAAooqEjA4v"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { Auth0Provider } from '@auth0/auth0-react';
// import { createRoot } from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
    </React.StrictMode>
);