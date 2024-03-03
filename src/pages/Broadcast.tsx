import { getCorrectedTite } from "../utilities/nameFormat";
import { utcTimeToDate } from "../utilities/utcDateConvert";

const Broadcast = ({ broadcast }: any) => {
  let correctedTitle = getCorrectedTite(broadcast.title);
  let availableUntil = broadcast.availablestoputc !== undefined ? utcTimeToDate(broadcast.availablestoputc) : "";
  let broadcastdate = broadcast.broadcastdateutc !== undefined ? utcTimeToDate(broadcast.broadcastdateutc) : "";
  let audioSourceIndex = broadcast.playlist.statkey.indexOf("/[e(");
  let audioLinkPart = broadcast.playlist.statkey.substring(audioSourceIndex + 4, broadcast.playlist.statkey.length - 2);

  return (
    <div id="broadcastWrapper">
      {broadcast.broadcastfiles !== null && broadcast.broadcastfiles.length > 0 && (
        <div id="broadcastContainer">
          <div id="broadcastImgWrapper">
            <img src={broadcast.imagetemplate} alt="broadcast image" id="broadcastImg" />
          </div>
          <div id="broadcastInfo">
            <p id="broadcastTitle">{correctedTitle}</p>
            <hr id="broadcastHr" />
            {broadcast.description !== "" && <p>{broadcast.description}</p>}
            {broadcastdate && <p>Sändningsdatum: {broadcastdate}</p>}
            {broadcastdate && <p>Tillgänglig till: {availableUntil}</p>}
            {broadcast.broadcastfiles[0].duration !== "" && <p>Duration: {broadcast.broadcastfiles[0].duration} sekunder</p>}
          </div>
          <div id="broadcastAudioWrapper">
            <iframe
              id="broadcastAudio"
              title="Inbäddat innehåll från Sveriges Radio"
              height="110"
              frameBorder="0"
              src={`https://sverigesradio.se/embed/episode/${audioLinkPart}`}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Broadcast;
