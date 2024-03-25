import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './globals.css';
import SocketIoContext from './context/SocketIoContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketIoContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketIoContext>
    </Provider>
  </React.StrictMode>
);
