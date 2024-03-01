import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar.tsx";

export function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
/*
all the programs on a given channel during "today" and also be able to see what airs "tomorrow" and maybe some day later in the week.
when a specific program airs and on which channel.
*/
