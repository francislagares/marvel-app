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
