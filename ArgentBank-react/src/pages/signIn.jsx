import InputWrapper from "../components/inputWrapper/inputWrapper.jsx";
import Modal from "../components/modal/modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addEmail,
  addPassword,
  checkCheckbox,
  defaultChecked,
} from "../Slices/logInSlice.jsx";
import { loginAsync, reset } from "../features/loginThunk.jsx";
import { openModal } from "../Slices/modalSlice.jsx";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userConnection.connection);
  const { email, checked } = useSelector((state) => state.identity);
  const emailLocale = localStorage?.getItem("email") ?? "";

  useEffect(() => {
    if (JSON.stringify(error) != "{}") {
      dispatch(openModal());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (localStorage?.getItem("checked") == "true") {
      dispatch(defaultChecked());
    }
    if (emailLocale !== "") {
      dispatch(addEmail(emailLocale));
    }
  }, [dispatch, emailLocale]);

  
  

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAsync())
      .unwrap()
      .then(() => navigate("/profile"));
    dispatch(reset());

    if (checked == true) {
      localStorage.setItem("email", email);
      localStorage.setItem("checked", true);
    }

    if (checked == false) {
      localStorage?.removeItem("email");
      localStorage?.removeItem("checked");
    }
  };

  const handleCheck = () => {
    dispatch(checkCheckbox());
  };

  return (
    <>
      {isOpen && <Modal />}
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputWrapper
              label="email"
              id="email"
              type="text"
              defaultValue={emailLocale}
              onChange={(e) => dispatch(addEmail(e.target.value))}
            />
            <InputWrapper
              label="Password"
              id="password"
              type="password"
              onChange={(e) => dispatch(addPassword(e.target.value))}
            />
            <div className="input-remember">
              {localStorage.getItem("checked") ? (
                <input
                  type="checkbox"
                  id="remember-me"
                  onChange={handleCheck}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  id="remember-me"
                  onChange={handleCheck}
                />
              )}

              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
