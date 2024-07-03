import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BatchsearchProvider } from './assets/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
 <BatchsearchProvider>
    <App />  
    </BatchsearchProvider>

  
)
