import { Route, Routes } from "react-router-dom";
import SelectedChannel from "./SelectedChannel";
import Channel from "./Channel";

const Routing = ({
  content,
  allChannels,
  programcontent,
  handleSelectedCategory,
  selectedCategoryId,
}: {
  content: any;
  allChannels: any;
  programcontent: any;
  handleSelectedCategory: any;
  selectedCategoryId: string;
}) => {
  return (
    <Routes>
      <Route
        path="/channels/:id"
        element={<SelectedChannel allChannels={allChannels} handleSelectedCategory={handleSelectedCategory} selectedCategoryId={selectedCategoryId} />}
      />
      <Route path="/" element={<main>{content}</main>} />
      <Route path="/programs" element={<main>{programcontent}</main>} />
    </Routes>
  );
};

export default Routing;
