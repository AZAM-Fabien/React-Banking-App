import InputWrapper from "../components/inputWrapper/inputWrapper.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Slices/signInSlices.jsx";
import { useNavigate } from "react-router-dom";
import { addEmail, addPassword } from "../Slices/logInSlice.jsx";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const connectState = useSelector((state) => state.connect);
  console.log(connectState);

  const identityState = useSelector((state) => state.identity);
  console.log(identityState);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: identityState.email, password: identityState.password }),
      });
      console.log("Reponse de l'API :", response);
      if (response.ok) {
        const data = await response.json();
        dispatch(login(data.body.token));
        console.log("Connexion réussie ! Données reçues :", data);
        navigate("/profile");
      } else {
        const errorData = await response.json();
        console.error("Erreur de connexion :", errorData);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputWrapper
        label="email"
        id="email"
        type="text"
        onChange={(e) =>dispatch(addEmail(e.target.value))}
      />
      <InputWrapper
        label="Password"
        id="password"
        type="password"
        onChange={(e) =>dispatch(addPassword(e.target.value))}
      />
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
export default LogIn;
