import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './globals.css';
import SocketIoContext from './context/SocketIoContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import UserAuthContext from './context/UserAuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <UserAuthContext>
      <React.StrictMode>
        <SocketIoContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketIoContext>
      </React.StrictMode>
    </UserAuthContext>
  </Provider>
);
