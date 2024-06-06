import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/redux.js";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Acceuil from "./pages/acceuil.jsx";
import Sign_in from "./pages/sign_in.jsx";
import User from "./pages/user.jsx";
// import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/sign-in" element={<Sign_in />} />
          <Route path="profile" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    // </Provider>
  );
}

export default App;
