import { Route, Routes } from "react-router-dom";
import SelectedChannel from "./SelectedChannel";
import Programs from "./Programs";
import Channels from "./Channels";
import { IRoutingProps } from "./interfaces";
import SelectedProgram from "./SelectedProgram";
import LikedPrograms from "./LikedPrograms";
import NotFound from "./NotFound";

const Routing = ({
  getAllChannels,
  getAllPrograms,
  getSelectedCategoryId,
  getLikedPrograms,
  allChannels,
  allPrograms,
  selectedCategoryId,
  likedPrograms,
}: IRoutingProps) => {
  return (
    <Routes>
      <Route path="/channels/:id" element={<SelectedChannel allChannels={allChannels} selectedCategoryId={selectedCategoryId} />} />
      <Route path="/programs/:id" element={<SelectedProgram allPrograms={allPrograms} />} />
      <Route
        path="/programs"
        element={<Programs getAllPrograms={getAllPrograms} getSelectedCategoryId={getSelectedCategoryId} getLikedPrograms={getLikedPrograms} />}
      />
      <Route path="/" element={<Channels getAllChannels={getAllChannels} />} />
      <Route path="/programs/liked" element={<LikedPrograms likedPrograms={likedPrograms} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
