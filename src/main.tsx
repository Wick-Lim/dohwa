import { BlueprintProvider } from '@blueprintjs/core';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css";

import "tailwindcss/tailwind.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlueprintProvider>
      <style>{`
        html, body, #root {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        button {
          outline: none;
        }
      `}</style>
      <App />
    </BlueprintProvider>
  </StrictMode>,
);
