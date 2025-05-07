import 'bootstrap/dist/css/bootstrap.css';
import { Headerbar } from './assets/signup';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
     
      <Routes>
       
      
       <Route path="/" element={<Headerbar />} />
      </Routes>
   
      
      </>
  );
}



export default App;
