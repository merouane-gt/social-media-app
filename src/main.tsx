import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      
      <App /> 

<Header></Header>

    </StrictMode>
  </BrowserRouter>
)