import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createStytchClient, StytchProvider } from '@stytch/react';

import './index.css'
import App from './App.jsx'

const stytch = createStytchClient('public-token-test-7d595f3a-bfd0-4891-8c2a-3b33e348273c');

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StytchProvider stytch={stytch}>
      <App />
    </StytchProvider>
  </StrictMode>
);
