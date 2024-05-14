export const getStreamers = (selector: string): string => {
  const streamersList = Array.from(document.querySelectorAll(selector));

  const steamers = streamersList.map(
    (streamerItem : HTMLAnchorElement) => streamerItem?.href,
  );

  return JSON.stringify(steamers);
};
