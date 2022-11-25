import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import { SearchContextProvider } from './context/SearchContext';
import { SideBarContextProvider } from './context/SideBarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <SideBarContextProvider>
        <App />
        </SideBarContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
