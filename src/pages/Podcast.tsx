import { getCorrectedTite } from "../utilities/nameFormat";
import { utcTimeToDate } from "../utilities/utcDateConvert";

const Podcast = ({ podcast }: any) => {
  let correctedTitle = getCorrectedTite(podcast.title);
  let availableFrom = podcast.availablefromutc !== undefined ? utcTimeToDate(podcast.availablefromutc) : "";
  let publishDate = podcast.publishdateutc !== undefined ? utcTimeToDate(podcast.publishdateutc) : "";

  return (
    <div id="podcastWrapper">
      <div id="podcastInfo">
        <p id="podcastTitle">{correctedTitle}</p>
        <hr id="podcastHr" />
        <div id="podcastInfoText">
          {podcast.description !== "" && <p>{podcast.description}</p>}
          <p>Program: {podcast.program.name}</p>
          {publishDate && <p>Sändningsdatum: {publishDate}</p>}
          {availableFrom && <p>Tillgänglig från: {availableFrom}</p>}
          {podcast.duration !== "" && <p>Duration: {podcast.duration} sekunder</p>}
        </div>
      </div>
      <div id="broadcastAudioWrapper">
        <audio src={podcast.url} controls></audio>
      </div>
    </div>
  );
};

export default Podcast;
