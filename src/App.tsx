import { BrowserRouter, Outlet } from "react-router-dom";
import Routing from "./Routing.tsx";
import NavBar from "./NavBar.tsx";

export function App() {
  return (
    /*     <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter> */
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
/*
all the programs on a given channel during "today" and also be able to see what airs "tomorrow" and maybe some day later in the week.
get information on a specific program. --ok
when a specific program airs and on which channel.
selectedProgram info + favoriteprogram info -> ny component?
*/
