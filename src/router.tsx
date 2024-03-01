import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./App";
import Channels from "./Channels";
import SelectedChannel from "./SelectedChannel";
import Programs from "./Programs";
import SelectedProgram from "./SelectedProgram";
import LikedPrograms from "./LikedPrograms";
import NotFound from "./NotFound";

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
