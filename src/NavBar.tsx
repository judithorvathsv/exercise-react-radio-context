import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink to={"/"}>Channels</NavLink>
      <NavLink to={"/programs"}>Programs</NavLink>
    </>
  );
};

export default NavBar;
