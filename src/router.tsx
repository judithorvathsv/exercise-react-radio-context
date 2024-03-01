import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./App";
import Channels from "./pages/Channels";
import SelectedChannel from "./pages/SelectedChannel";
import Programs from "./pages/Programs";
import SelectedProgram from "./pages/SelectedProgram";
import LikedPrograms from "./pages/LikedPrograms";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route path="/channels/:id" element={<SelectedChannel />} />
      <Route path="/programs/:id" element={<SelectedProgram />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/" element={<Channels />} />
      <Route path="/programs/liked" element={<LikedPrograms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
