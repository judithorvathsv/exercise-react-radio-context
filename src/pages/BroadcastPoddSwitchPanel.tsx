import { useState } from "react";
import Boadcasts from "./Boadcasts";

const BroadcastPoddSwitchPanel = ({ program }: any) => {
  const [tab, setTab] = useState<boolean>(true);

  function handleTab(tabName: string) {
    if (tabName == "makeItBroadcast") {
      setTab(true);
      document.getElementById("getBroadcastButton")!.style.backgroundColor = "white";
      document.getElementById("getBroadcastButton")!.style.color = "#003049";
      document.getElementById("getPoddButton")!.style.backgroundColor = "#003049";
      document.getElementById("getPoddButton")!.style.color = "white";
    } else {
      setTab(false);
      document.getElementById("getPoddButton")!.style.backgroundColor = "white";
      document.getElementById("getPoddButton")!.style.color = "#003049";
      document.getElementById("getBroadcastButton")!.style.backgroundColor = "#003049";
      document.getElementById("getBroadcastButton")!.style.color = "white";
    }
  }
  return (
    <section id="programAllBroadCasts">
      {program.hasondemand && (
        <>
          <div id="broadcastPoddButtons">
            <button id="getBroadcastButton" className="selectedSectionBackButton" onClick={() => handleTab("makeItBroadcast")}>
              Sändningar
            </button>
            <button id="getPoddButton" className="selectedSectionBackButton" onClick={() => handleTab("makeItPodds")}>
              Podds
            </button>
          </div>

          {tab == true && <Boadcasts program={program} />}
        </>
      )}
    </section>
  );
};

export default BroadcastPoddSwitchPanel;
