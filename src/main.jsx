import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)
