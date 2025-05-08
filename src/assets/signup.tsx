import 'bootstrap/dist/css/bootstrap.css';
import './signup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


;
function Headerbar() {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
  return (
   
    <>
     <div className="header">
        <h1>Meow!</h1>
        <p >Welcome to icat 😺</p>
        </div>
    <div className="card">
      <img
        src="https://icon-library.com/images/cat-icon-png/cat-icon-png-17.jpg"
        style={{ width: '250px', height: 'auto' }}
        className="logo-app"
        alt="logo"
      />
      <h5 className="app-name">icat</h5>
      <p className="app-text" style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        Join a cozy space to share your favorite moments, meet new friends. Sign up and let the cuteness begin! 💜😺
      </p>
      <p id="sign-up-text">sign up</p>
      
       
 <div className="signup-bar">
 
   
     <>
       <input
         type="text"
         placeholder="Username"
         className='username-field'
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         required />
       <input 
         type="password" 
         name="password" 
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required />
     </>
   


         
     

       
        <Link 
          to="/homepage"
          state={{ username, password }}
        >
          <input
            type="button"
            className="next-btn"
            value="Next"
          />
        </Link>
      </div>
      </div>
    </>
   
  );
}


  





export { Headerbar };
