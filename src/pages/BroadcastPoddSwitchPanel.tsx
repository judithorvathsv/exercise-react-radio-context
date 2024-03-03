import { useState } from "react";
import Boadcasts from "./Boadcasts";
import Podcasts from "./Podcasts";

const BroadcastPoddSwitchPanel = ({ program }: any) => {
  const [tab, setTab] = useState<boolean>(true);

  function handleTab(tabName: string) {
    if (tabName == "makeItBroadcast") {
      setTab(true);
      if (program.hasondemand) {
        document.getElementById("getBroadcastButton")!.style.backgroundColor = "white";
        document.getElementById("getBroadcastButton")!.style.color = "#003049";
      }
      if (program.haspod) {
        document.getElementById("getPoddButton")!.style.backgroundColor = "#003049";
        document.getElementById("getPoddButton")!.style.color = "white";
      }
    } else {
      setTab(false);
      if (program.hasondemand) {
        document.getElementById("getPoddButton")!.style.backgroundColor = "white";
        document.getElementById("getPoddButton")!.style.color = "#003049";
      }
      if (program.haspod) {
        document.getElementById("getBroadcastButton")!.style.backgroundColor = "#003049";
        document.getElementById("getBroadcastButton")!.style.color = "white";
      }
    }
  }

  return (
    <section id="programAllBroadCasts">
      <div id="broadcastPoddButtons">
        {program.hasondemand == true && (
          <button id="getBroadcastButton" className="selectedSectionBackButton" onClick={() => handleTab("makeItBroadcast")}>
            Sändningar
          </button>
        )}
        {program.haspod == true && (
          <button id="getPoddButton" className="selectedSectionBackButton" onClick={() => handleTab("makeItPodds")}>
            Poddar
          </button>
        )}
      </div>

      {tab == true && program.hasondemand == true && <Boadcasts program={program} />}
      {tab == false && program.haspod == true && <Podcasts program={program} />}
    </section>
  );
};

export default BroadcastPoddSwitchPanel;
