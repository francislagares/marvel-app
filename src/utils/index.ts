import md5 from 'md5';

export const getTimestamp = () => Date.now().toString();

export const getHash = (timeStamp: string) =>
  md5(
    timeStamp +
      process.env.MARVEL_API_PRIVATE_KEY +
      process.env.MARVEL_API_PUBLIC_KEY,
  );

export const createQueryKey = (timestamp: string, publicKey: string) => {
  const hash = getHash(timestamp);
  return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
};

export const removeYearFromString = (title: string) => {
  // Match the year pattern along with the surrounding parentheses
  const match = RegExp(/\s*\(\d{4}\)\s*/).exec(title);

  // If a year is found, remove it along with the surrounding parentheses
  if (match) {
    const yearIndex = match.index;
    return `${title.slice(0, yearIndex)} ${title.slice(yearIndex + match[0].length)}`;
  }

  // If no year is found, return the original string
  return title;
};

export const extractYearFromString = (year: string) => {
  const match = RegExp(/\b\d{4}\b/).exec(year);

  return match ? parseInt(match[0]) : null;
};
