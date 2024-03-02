const Broadcast = ({ broadcast }: any) => {
  //give correct title
  function getCorrectedTite(title: string) {
    let lastSpaceIndexInTitle = title.lastIndexOf(" ");
    let dayString = title.substring(lastSpaceIndexInTitle - 2, lastSpaceIndexInTitle);
    let monthString = title.substring(lastSpaceIndexInTitle - 4, lastSpaceIndexInTitle - 2);
    return title.substring(0, lastSpaceIndexInTitle - 4) + "-" + monthString + "-" + dayString;
  }

  //add 0 if for ex date is 1 -> 01
  function checkNulls(data: number) {
    if (Number(data) < 10) return "0" + data.toString();
    else return data.toString();
  }

  //give real date from utc string
  function utcTimeToDate(utcTime: string) {
    const dateFromUtcString = utcTime.substring(6, 19);
    const dateFromUtc = new Date(Number(dateFromUtcString));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = dateFromUtc.getUTCFullYear();
    const month = months[dateFromUtc.getMonth()];
    const day = dateFromUtc.getDate();
    const dayCorrected = checkNulls(day);
    const hour = dateFromUtc.getHours();
    let hourCorrected = checkNulls(hour);
    let min = dateFromUtc.getMinutes();
    let minCorrected = checkNulls(min);
    let sec = dateFromUtc.getSeconds();
    let secCorrected = checkNulls(sec);
    const time = year + " " + month + " " + dayCorrected + " " + hourCorrected + ":" + minCorrected + ":" + secCorrected;
    return time;
  }

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
