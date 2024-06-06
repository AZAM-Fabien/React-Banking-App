import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
      {/* dépend de quelle page on est */}
      {/* <div>
        <NavLink className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          Tony
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div> */}
    </nav>
  );
}

export default Header;
