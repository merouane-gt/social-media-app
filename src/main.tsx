import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Homepage from './assets/homepage.tsx'




createRoot(document.getElementById('root')!).render(
 

     
    <StrictMode>
     <BrowserRouter>
      <App /> 

      <Routes>
        
      
        <Route path="/homepage" element={<Homepage />} />
      </Routes>




 </BrowserRouter>
    </StrictMode>
 
)