import { Route, Routes } from "react-router-dom";
import ChannelPrograms from "./ChannelPrograms";
import SelectedChannel from "./SelectedChannel";
import { ReactNode } from "react";
import Channels from "./Channels";

const Routing = ({ content, allChannels }: { content: any; allChannels: any }) => {
  return (
    <Routes>
      <Route path="/channels/:id" element={<SelectedChannel allChannels={allChannels} />} />
      <Route path="/" element={<main>{content}</main>} />
    </Routes>
  );
};

export default Routing;
