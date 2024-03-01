import { Route, Routes } from "react-router-dom";
import Programs from "./Programs";
import Channels from "./Channels";
import SelectedProgram from "./SelectedProgram";
import LikedPrograms from "./LikedPrograms";
import NotFound from "./NotFound";
import SelectedChannel from "./SelectedChannel";

const Routing = () => {
  return (
    <Routes>
      <Route path="/channels/:id" element={<SelectedChannel />} />
      <Route path="/programs/:id" element={<SelectedProgram />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/" element={<Channels />} />
      <Route path="/programs/liked" element={<LikedPrograms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
