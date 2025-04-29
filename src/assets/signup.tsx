import 'bootstrap/dist/css/bootstrap.css';
import './signup.css';





function SignUp() {
  



  return (
    <>
      <div className="email-bar">
        <input type="email" placeholder="Email" className="email-field" required />
        <input type="password" name="password" id="password" />
        <input
          type="button"
          className="next-btn"
          value="Next" />
      </div>
    </>
  );
};

export { SignUp };
