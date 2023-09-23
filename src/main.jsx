import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { AppTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <AppTheme>
          <App />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
