import InputWrapper from "../components/inputWrapper/inputWrapper.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addEmail, addPassword } from "../Slices/logInSlice.jsx";
import { loginAsync, reset } from "../features/login.jsx";
import { useNavigate } from "react-router-dom";

function Sign_in() {
  const navigate = useNavigate();
  const { isConnected } = useSelector((state) => state.connect); 
  console.log({ isConnected });

  useEffect(() => {
    if (isConnected == true) {
      navigate("/profile");
    }
  }, [isConnected, navigate]);

  const dispatch = useDispatch();

  const { connection } = useSelector((state) => state.userConnection);
  console.log({ connection });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAsync());
    dispatch(reset());
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputWrapper
            label="email"
            id="email"
            type="text"
            onChange={(e) => dispatch(addEmail(e.target.value))}
          />
          <InputWrapper
            label="Password"
            id="password"
            type="password"
            onChange={(e) => dispatch(addPassword(e.target.value))}
          />
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Sign_in;
