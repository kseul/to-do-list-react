import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Solution from './Solution/Solution';
import GlobalStyle from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
    {/* <Solution /> */}
  </>
);
