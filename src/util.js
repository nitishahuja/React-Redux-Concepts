export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.number > b.number ? -1 : 1));
};
