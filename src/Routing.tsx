import { Route, Routes } from "react-router-dom";
import SelectedChannel from "./SelectedChannel";
import Programs from "./Programs";
import Channels from "./Channels";
import { IRoutingProps } from "./interfaces";
import SelectedProgram from "./SelectedProgram";

const Routing = ({ getAllChannels, getAllPrograms, getSelectedCategoryId, allChannels, allPrograms, selectedCategoryId }: IRoutingProps) => {
  return (
    <Routes>
      <Route path="/channels/:id" element={<SelectedChannel allChannels={allChannels} selectedCategoryId={selectedCategoryId} />} />
      <Route path="/programs/:id" element={<SelectedProgram allPrograms={allPrograms} />} />
      <Route path="/programs" element={<Programs getAllPrograms={getAllPrograms} getSelectedCategoryId={getSelectedCategoryId} />} />
      <Route path="/" element={<Channels getAllChannels={getAllChannels} />} />
    </Routes>
  );
};

export default Routing;
