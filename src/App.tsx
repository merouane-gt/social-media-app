import 'bootstrap/dist/css/bootstrap.css';
import { Headerbar } from './assets/signup';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './assets/userprofile';


function App() {
  return (
    <>
     
      <Routes>
       
      
       <Route path="/" element={<Headerbar />} />
       <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
   
      
      </>
  );
}



export default App;
