export const cleanObjectEmpty = (obj = {}) => {
  const data = { ...obj };
  Object.keys(data).forEach((item) => {
    if (!data[item] && (data[item] !== "0" || data[item] !== 0)) {
      delete data[item];
    }
  });
  return data;
};
