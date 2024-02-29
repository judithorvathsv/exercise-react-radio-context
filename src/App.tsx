import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing.tsx";
import NavBar from "./NavBar.tsx";
import { useState } from "react";
import { IChannelProps, IOneProgramProps } from "./interfaces.ts";

export function App() {
  const [allChannels, setAllChannels] = useState<any>();
  const [allPrograms, setAllPrograms] = useState<any>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("0");
  const [likedPrograms, setLikedPrograms] = useState<IOneProgramProps[]>([]);

  function getAllChannels(allChannels: IChannelProps[]) {
    setAllChannels(allChannels);
  }

  function getAllPrograms(allPrograms: IOneProgramProps) {
    setAllPrograms(allPrograms);
  }

  function getSelectedCategoryId(selectedCategoryId: string) {
    setSelectedCategoryId(selectedCategoryId);
  }

  function getLikedPrograms(likedPrograms: IOneProgramProps[]) {
    setLikedPrograms(likedPrograms);
  }



  return (
    <BrowserRouter>
      <NavBar />
      <Routing
        getAllChannels={getAllChannels}
        getAllPrograms={getAllPrograms}
        getSelectedCategoryId={getSelectedCategoryId}
        getLikedPrograms={getLikedPrograms}
        allChannels={allChannels}
        allPrograms={allPrograms}
        selectedCategoryId={selectedCategoryId}
        likedPrograms={likedPrograms}
      />
    </BrowserRouter>
  );
}
/*
a list of all the channels. --ok??
all the programs on a given channel during "today" and also be able to see what airs "tomorrow" and maybe some day later in the week.
all the program that airs on a given channel. --ok ??
a list of all the categories. --ok
a list of all the programs in a given category. --ok
search for a program. --ok
get information on a specific program. --ok
when a specific program airs and on which channel.
*/
