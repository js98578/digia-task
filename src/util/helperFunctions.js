export const getRandomPhoneNumber = () => {
  const digits = Math.floor(Math.random() * 9000000000) + 1000000000;
  return digits;
};

export const getRandomEmail = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let string = "";
  // eslint-disable-next-line no-plusplus
  for (let ii = 0; ii < 15; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${string}@gmail.com`;
};
