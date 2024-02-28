import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing.tsx";
import NavBar from "./NavBar.tsx";
import { useState } from "react";
import { IChannelProps, IOneProgramProps } from "./interfaces.ts";

export function App() {
  const [allChannels, setAllChannels] = useState<any>();
  const [allPrograms, setAllPrograms] = useState<any>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("0");

  function getAllChannels(allChannels: IChannelProps[]) {
    setAllChannels(allChannels);
  }

  function getAllPrograms(allPrograms: IOneProgramProps) {
    setAllPrograms(allPrograms);
  }

  function getSelectedCategoryId(selectedCategoryId: string) {
    setSelectedCategoryId(selectedCategoryId);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routing
        getAllChannels={getAllChannels}
        getAllPrograms={getAllPrograms}
        getSelectedCategoryId={getSelectedCategoryId}
        allChannels={allChannels}
        allPrograms={allPrograms}
        selectedCategoryId={selectedCategoryId}
      />
    </BrowserRouter>
  );
}
/*
1.all the programs on a given channel during "today" and also be able to see what airs "tomorrow" and maybe some day later in the week.
2.see when a specific program airs and on which channel.
3.mark program as favorites that I can later view in a seperate view.
*/
