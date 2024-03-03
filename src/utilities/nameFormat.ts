//give correct title
export function getCorrectedTite(title: string) {
  let lastSpaceIndexInTitle = title.lastIndexOf(" ");
  let dayString = title.substring(lastSpaceIndexInTitle - 2, lastSpaceIndexInTitle);
  let monthString = title.substring(lastSpaceIndexInTitle - 4, lastSpaceIndexInTitle - 2);
  return title.substring(0, lastSpaceIndexInTitle - 4) + "-" + monthString + "-" + dayString;
}
