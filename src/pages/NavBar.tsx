import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navDiv" className="fixed-top">
      <div id="miniLogo">
        <img src="/src/assets/logo.svg" alt="radio logo" className="navBarImage" />
      </div>
      <div id="longLogo">
        <img src="/src/assets/radio.svg" alt="radio logo" className="navBarImage" />
      </div>
      <div id="navLinkDiv">
        <NavLink className={"navLink"} to={"/"}>
          Kanaler
        </NavLink>
        <NavLink className={"navLink"} to={"/programs"}>
          Program
        </NavLink>
        <NavLink className={"navLink"} to={"/programs/liked"}>
          Favoriter
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
