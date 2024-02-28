import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navDiv">
      <div>
        <img src="./src/assets/radio.svg" alt="" id="navBarImage" />
      </div>
      <div id="navLinkDiv">
        <NavLink className={"navLink"} to={"/"}>
          Channels
        </NavLink>
        <NavLink className={"navLink"} to={"/programs"}>
          Programs
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
