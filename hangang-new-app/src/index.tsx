import App from '@components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (msg: string) => void;
    };
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
