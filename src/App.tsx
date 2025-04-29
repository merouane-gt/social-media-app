import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { SignUp } from './assets/signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="header">
        <h1>Meow!</h1>
        <p>Welcome to icat 😺</p>
      </div>
      <Routes>
       
        <Route path="/sign-up" element={<SignUp />} />
       
      </Routes>
    </>
  );
}

function Header() {
  return (
    <div className="card">
      <img
        src="https://icon-library.com/images/cat-icon-png/cat-icon-png-17.jpg"
        style={{ width: '250px', height: 'auto' }}
        className="logo-app"
        alt="logo"
      />
      <h5 className="app-name">icat</h5>
      <p className="app-text">
        Join a cozy space to share your favorite moments, meet new friends. Sign up and let the cuteness begin! 💜😺
      </p>
      <p id="sign-up-text">sign up</p>
      <div className="signup-bar"></div>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
export { Header };
