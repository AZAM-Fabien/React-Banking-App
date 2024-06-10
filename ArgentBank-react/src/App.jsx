import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/redux.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Acceuil from "./pages/acceuil.jsx";
import Sign_in from "./pages/sign_in.jsx";
import Profile from "./pages/profile.jsx";
import PrivateRoute from "./features/verification.jsx";
// import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/sign-in" element={<Sign_in />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute isConnected={store.getState().connect.isConnected}>
                <Profile />
              </PrivateRoute>
            }
          />
          {/* Fallback route for unauthorized access */}
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
