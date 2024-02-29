import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navDiv">
      <div id="miniLogo">
        <img src="/src/assets/logo.svg" alt="radio logo" className="navBarImage" />
      </div>
      <div id="longLogo">
        <img src="/src/assets/radio.svg" alt="radio logo" className="navBarImage" />
      </div>
      <div id="navLinkDiv">
        <NavLink className={"navLink"} to={"/"}>
          Channels
        </NavLink>
        <NavLink className={"navLink"} to={"/programs"}>
          Programs
        </NavLink>
        <NavLink className={"navLink"} to={"/programs/liked"}>
          Favorites
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
