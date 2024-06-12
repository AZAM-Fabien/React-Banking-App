import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/redux.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Acceuil from "./pages/acceuil.jsx";
import SignIn from "./pages/signIn.jsx";
import Profile from "./pages/profile.jsx";
import ProtectedRoute from "./features/protectedRoute.jsx";
// import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* <Route path="/error" element={<Error />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
