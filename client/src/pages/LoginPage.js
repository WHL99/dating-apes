import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import Navbar from "../components/Navbar";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const { storeToken, verifyStoredToken } = useContext(AuthContext);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        verifyStoredToken()
          .then(() => {
            navigate('/users')
          })
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  return (

    <div style={{ fontFamily: 'Quicksand' }}>
      <Navbar />
      <form className='Signup-9-Login' onSubmit={handleLoginSubmit}>
        <h3>Let's find someone for your pet &nbsp; ٩(^ᴗ^)۶ </h3>
        <div className='Signup-9-1'>
          <label>email :</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />
        </div>
        <div className='Signup-9-1'>
          <label>password :</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <div className='Signup-9-1'>
          <button className='btn-hover' style={{ borderRadius: '30px', marginTop: '1.5vh' }} type="submit" >LOGIN</button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className='Login-bottom-text' >
        <p>Don't you have an account yet?&nbsp;&nbsp;&nbsp;</p>
        <Link to={"/signup"}> SIGN UP</Link>
      </div>
    </div>
  )
}

export default LoginPage;